import * as dotenv from 'dotenv'
import { BigNumber } from '@ethersproject/bignumber'
import { JsonRpcProvider } from '@ethersproject/providers'
import { isAddress } from '@ethersproject/address'
import { AccountBalance } from '../src/index'

dotenv.config()
jest.setTimeout(30 * 1000)

const toBN = (v: number) => BigNumber.from(v)

const provider = new JsonRpcProvider(process.env.PROVIDER_URL)
const trader = '0xf8489bcef22d3282bb884b9e9cc708bb465c075e'

// baseTokens
const vSOL = '0x151Bb01c79F4516c233948D69daE39869BCcB737'

describe('AccountBalance', () => {
  let accountBalance: AccountBalance

  beforeAll(async () => {
    accountBalance = new AccountBalance({ provider })
  })

  test('Get Account Info', async () => {
    const balance = await accountBalance.getAccountInfo(trader, vSOL)
    expect(balance).toBeDefined()
  })

  test('Get Balance', async () => {
    const value = await accountBalance.getBase(trader, vSOL)
    expect(value).toBeDefined()
  })

  test('Get Base Tokens', async () => {
    const tokens = await accountBalance.getBaseTokens(trader)
    expect(Array.isArray(tokens)).toBe(true)
    expect(tokens.length).toBeGreaterThanOrEqual(0)
  })

  test('Get OrderBook Address', async () => {
    const value = await accountBalance.getOrderBook()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Vault Address', async () => {
    const value = await accountBalance.getVault()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Taker Position Notional', async () => {
    const value = await accountBalance.getTakerOpenNotional(trader, vSOL)
    expect(value).toBeDefined()
  })

  test('Get Taker Position Size', async () => {
    const value = await accountBalance.getTakerPositionSize(trader, vSOL)
    expect(value).toBeDefined()
  })

  test('Get Total Abs Position Value', async () => {
    const value = await accountBalance.getTotalAbsPositionValue(trader)
    expect(value).toBeDefined()
  })

  test('Get Total Open Notional', async () => {
    const value = await accountBalance.getTotalOpenNotional(trader, vSOL)
    expect(value).toBeDefined()
  })

  test('Get Total Position Value', async () => {
    const value = await accountBalance.getTotalPositionValue(trader, vSOL)
    expect(value).toBeDefined()
  })

  test('Get Margin Requirement For Liquidation', async () => {
    const value = await accountBalance.getMarginRequirementForLiquidation(trader)
    expect(value).toBeDefined()
  })

  test('Get Pnl And Pending Fee', async () => {
    const value = await accountBalance.getPnlAndPendingFee(trader)
    expect(value).toBeDefined()
  })

  test('Has Order', async () => {
    const value = await accountBalance.hasOrder(trader)
    expect(typeof value).toBe('boolean')
  })
})
