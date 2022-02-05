import * as dotenv from 'dotenv'
import { ethers, utils } from 'ethers'
import { MarketRegistry } from '../src/index'

dotenv.config()

jest.setTimeout(30 * 1000)

const isAddress = utils.isAddress
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)

// baseTokens
const vSOL = '0x151Bb01c79F4516c233948D69daE39869BCcB737'

describe('MarketRegistry', () => {
  let marketRegistry: MarketRegistry

  beforeAll(async () => {
    marketRegistry = new MarketRegistry({ provider, chainId: 10 })
  })

  test('Get Quote Token', async () => {
    const value = await marketRegistry.getQuoteToken()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Uniswap V3 Factory Address', async () => {
    const value = await marketRegistry.getUniswapV3Factory()
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Pool Address', async () => {
    const value = await marketRegistry.getPool(vSOL)
    expect(isAddress(value)).toBeTruthy()
  })

  test('Get Max Order Per Market', async () => {
    const value = await marketRegistry.getMaxOrdersPerMarket()
    expect(value).toBeDefined()
    expect(value).toBeGreaterThan(0)
  })

  test('Get Fee Ratio', async () => {
    const value = await marketRegistry.getFeeRatio(vSOL)
    expect(value).toBeDefined()
    expect(value).toBeGreaterThan(0)
  })

  test('Get Insurance Fund Fee Ratio', async () => {
    const value = await marketRegistry.getInsuranceFundFeeRatio(vSOL)
    expect(value).toBeDefined()
    expect(value).toBeGreaterThan(0)
  })

  test('Get Market Info', async () => {
    const value = await marketRegistry.getMarketInfo(vSOL)
    expect(value).toBeDefined()
  })
})
