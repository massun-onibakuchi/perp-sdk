import * as dotenv from 'dotenv'
import { JsonRpcProvider } from '@ethersproject/providers'
import { isAddress } from '@ethersproject/address'
import { ClearingHouse } from '../src/index'

dotenv.config()
jest.setTimeout(30 * 1000)

const provider = new JsonRpcProvider(process.env.PROVIDER_URL)
const trader = '0xf8489bcef22d3282bb884b9e9cc708bb465c075e'

describe('Clearing House', () => {
  let clearingHouse: ClearingHouse

  beforeAll(async () => {
    clearingHouse = new ClearingHouse({ provider })
  })

  test('Get Account Balance', async () => {
    const balance = await clearingHouse.getAccountBalance()
    expect(balance).toBeDefined()
  })

  test('Get Account Value', async () => {
    const value = await clearingHouse.getAccountValue(trader)
    expect(value).toBeDefined()
  })

  test('Get OrderBook Address', async () => {
    const value = await clearingHouse.getOrderBook()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get InsuranceFund Address', async () => {
    const value = await clearingHouse.getInsuranceFund()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get ClearingHouseConfig Address', async () => {
    const value = await clearingHouse.getClearingHouseConfig()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Exchange Address', async () => {
    const value = await clearingHouse.getExchange()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Vault Address', async () => {
    const value = await clearingHouse.getVault()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get UniswapV3Factory Address', async () => {
    const value = await clearingHouse.getUniswapV3Factory()
    expect(isAddress(value)).toBeTruthy()
  })
})
