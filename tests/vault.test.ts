import * as dotenv from 'dotenv'
import { ethers, BigNumber, utils } from 'ethers'
import { Vault, USDC_ADDRESSES } from '../src/index'

dotenv.config()

jest.setTimeout(30 * 1000)

const toBN = (v: number) => BigNumber.from(v)
const isAddress = utils.isAddress

const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const signer = ethers.Wallet.fromMnemonic(process.env.MNEMONIC!).connect(provider)
const trader = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'
const usdc = USDC_ADDRESSES[10] // optimism

describe('Vault', () => {
  let vault: Vault

  beforeAll(async () => {
    vault = new Vault({ provider, chainId: 10 })
  })

  test('Get Account Balance', async () => {
    const balance = await vault.getAccountBalance()
    expect(balance).toBeDefined()
  })

  test('Get Balance', async () => {
    const value = await vault.getBalance(trader)
    expect(value).toBeDefined()
  })

  test('Get Free Collateral', async () => {
    const value = await vault.getFreeCollateral(trader)
    expect(value).toBeDefined()
  })

  test('Get Free Collateral By Ratio', async () => {
    const value = await vault.getFreeCollateralByRatio(trader, '100000')
    expect(value).toBeDefined()
  })

  test('Get InsuranceFund Address', async () => {
    const value = await vault.getInsuranceFund()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get ClearingHouseConfig Address', async () => {
    const value = await vault.getClearingHouseConfig()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Exchange Address', async () => {
    const value = await vault.getExchange()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Settlement Token', async () => {
    const value = await vault.getSettlementToken()
    expect(isAddress(value)).toBeTruthy()
    expect(value).toEqual(usdc)
  })

  test('Get Total Debt', async () => {
    const value = await vault.getTotalDebt()
    expect(value).toBeDefined()
  })
})
