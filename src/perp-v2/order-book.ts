import { Contract } from '@ethersproject/contracts'
import { Base } from '../lib/base'
import type { BigNumberish } from '@ethersproject/bignumber'
import type { BytesLike } from '@ethersproject/bytes'
import type { PerpSDKConfig } from '../types'
import type { IOrderBook } from '../abi/types'
import Artifact from '../abi/OrderBook.json'

export class OrderBook extends Base {
  public contract: IOrderBook

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    this.contract = new Contract(Artifact['address'], Artifact['abi']) as IOrderBook

    const signerOrProvider = this.signer || provider
    if (signerOrProvider) {
      this.contract = this.contract.connect(signerOrProvider)
    }
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
