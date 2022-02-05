import { ethers, Overrides } from 'ethers'
import { PerpSDKConfig } from '../types'
import { Base } from '../lib/base'
import type { IClearingHouse } from '../abi/types'

export class ClearingHouse extends Base {
  public contract: IClearingHouse

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    const metadata = this.loadMetadata('ClearingHouse')
    this.contract = new ethers.Contract(metadata['address'], metadata['abi']) as IClearingHouse

    const signerOrProvider = this.signer || provider
    if (signerOrProvider) {
      this.contract = this.contract.connect(signerOrProvider)
    }
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }

  async addLiquidity(
    params: IClearingHouse.AddLiquidityParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return this.contract.addLiquidity(params, overrides)
  }

  async removeLiquidity(
    params: IClearingHouse.RemoveLiquidityParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return this.contract.removeLiquidity(params, overrides)
  }

  async settleAllFunding(trader: string, overrides?: Overrides & { from?: string | Promise<string> }) {
    return (await this.contract.settleAllFunding(trader, overrides)).wait()
  }

  async openPosition(
    params: IClearingHouse.OpenPositionParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return (await this.contract.openPosition(params, overrides)).wait()
  }

  async closePosition(
    params: IClearingHouse.ClosePositionParamsStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return (await this.contract.closePosition(params, overrides)).wait()
  }

  async liquidate(trader: string, baseToken: string, overrides?: Overrides & { from?: string | Promise<string> }) {
    return (await this.contract['liquidate(address,address)'](trader, baseToken, overrides)).wait()
  }

  async cancelAllExcessOrders(
    maker: string,
    baseToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return (await this.contract.cancelAllExcessOrders(maker, baseToken, overrides)).wait()
  }

  async getAccountBalance() {
    return this.contract.getAccountBalance()
  }

  async getAccountValue(trader: string) {
    return this.contract.getAccountValue(trader)
  }

  async getClearingHouseConfig() {
    return this.contract.getClearingHouseConfig()
  }

  async getExchange() {
    return this.contract.getExchange()
  }

  async getInsuranceFund() {
    return this.contract.getInsuranceFund()
  }

  async getOrderBook() {
    return this.contract.getOrderBook()
  }

  async getQuoteToken() {
    return this.contract.getQuoteToken()
  }

  async getUniswapV3Factory() {
    return this.contract.getUniswapV3Factory()
  }

  async getVault() {
    return this.contract.getVault()
  }
}
