import * as dotenv from 'dotenv'
import { ethers, utils } from 'ethers'
import { OrderBook } from '../src/index'

dotenv.config()

jest.setTimeout(30 * 1000)

const isAddress = utils.isAddress
const provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER_URL)
const trader = '0xf8489bcef22d3282bb884b9e9cc708bb465c075e'

// baseTokens
const vSOL = '0x151Bb01c79F4516c233948D69daE39869BCcB737'

describe('OrderBook', () => {
  let orderBook: OrderBook

  beforeAll(async () => {
    orderBook = new OrderBook({ provider })
  })

  test('Get Open Order Ids', async () => {
    const ids = await orderBook.getOpenOrderIds(trader, vSOL)
    expect(Array.isArray(ids)).toBe(true)
    expect(ids.length).toBeGreaterThanOrEqual(0)
  })

  // test('Get Open Order By Id', async () => {
  //   const ids = await orderBook.getOpenOrderIds(trader, vSOL)
  //   const id = ids[0]
  //   const order = await orderBook.getOpenOrderById(id)
  //   expect(order).toBeDefined()
  // })

  test('Has Order', async () => {
    const hasOrder = await orderBook.hasOrder(trader, [vSOL])
    expect(typeof hasOrder).toBe('boolean')
  })

  test('Get Total Order Debt', async () => {
    const value = await orderBook.getTotalOrderDebt(trader, vSOL, false)
    expect(value).toBeDefined()
  })

  test('Get Total Quote Balance And Pending Fee', async () => {
    const value = await orderBook.getTotalQuoteBalanceAndPendingFee(trader, [vSOL])
    expect(value).toBeDefined()
  })

  test('Get Total Amount In Pool And Pending Fee', async () => {
    const value = await orderBook.getTotalTokenAmountInPoolAndPendingFee(trader, vSOL, false)
    expect(value).toBeDefined()
  })

  test('Get Exchange Address', async () => {
    const value = await orderBook.getExchange()
    expect(isAddress(value)).toBeTruthy()
  })
})
