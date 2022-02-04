import { BigNumberish, BytesLike, ethers } from 'ethers'
import { PerpSDKConfig } from '../types'
import { Base } from '../base'
import type { IOrderBook } from '../../typechain-types'

export class OrderBook extends Base {
  contract: IOrderBook

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    const metadata = this.loadMetadata('OrderBook')
    this.contract = new ethers.Contract(metadata['address'], metadata['abi']).connect(
      this.signer || provider
    ) as IOrderBook
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }
  async getExchange() {
    return this.contract.getExchange()
  }
  async getOpenOrderIds(trader: string, baseToken: string) {
    return this.contract.getOpenOrderIds(trader, baseToken)
  }
  async getOpenOrderById(orderId: BytesLike) {
    return this.contract.getOpenOrderById(orderId)
  }
  async getOpenOrder(trader: string, baseToken: string, lowerTick: BigNumberish, upperTick: BigNumberish) {
    return this.contract.getOpenOrder(trader, baseToken, lowerTick, upperTick)
  }
  async hasOrder(trader: string, tokens: string[]) {
    return this.contract.hasOrder(trader, tokens)
  }

  async getPendingFee(trader: string, baseToken: string, lowerTick: BigNumberish, upperTick: BigNumberish) {
    return this.contract.getPendingFee(trader, baseToken, lowerTick, upperTick)
  }

  async getTotalOrderDebt(trader: string, baseToken: string, fetchBase: boolean) {
    return this.contract.getTotalOrderDebt(trader, baseToken, fetchBase)
  }

  async getTotalQuoteBalanceAndPendingFee(trader: string, baseTokens: string[]) {
    return this.contract.getTotalQuoteBalanceAndPendingFee(trader, baseTokens)
  }

  async getTotalTokenAmountInPoolAndPendingFee(trader: string, baseToken: string, fetchBase: boolean) {
    return this.contract.getTotalTokenAmountInPoolAndPendingFee(trader, baseToken, fetchBase)
  }
}
