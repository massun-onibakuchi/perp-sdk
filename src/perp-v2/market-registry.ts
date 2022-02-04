import { ethers } from 'ethers'
import { Base } from '../base'
import type { IMarketRegistry } from '../../typechain-types'
import { PerpSDKConfig } from '../types'

export class MarketRegistry extends Base {
  contract: IMarketRegistry

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    const metadata = this.loadMetadata('MarketRegistry')
    this.contract = new ethers.Contract(metadata['address'], metadata['abi'], provider).connect(
      this.signer || provider
    ) as IMarketRegistry
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }

  async getQuoteToken() {
    //@todo Token instanceを返す
    return this.contract.getQuoteToken()
  }

  async getUniswapV3Factory() {
    return this.contract.getUniswapV3Factory()
  }

  async getMaxOrdersPerMarket() {
    //@todo Token instanceを返す
    return this.contract.getMaxOrdersPerMarket()
  }

  async getPool(baseToken: string) {
    return this.contract.getPool(baseToken)
  }

  async getFeeRatio(baseToken: string) {
    return this.contract.getFeeRatio(baseToken)
  }

  async getInsuranceFundFeeRatio(baseToken: string) {
    return this.contract.getInsuranceFundFeeRatio(baseToken)
  }

  async getMarketInfo(baseToken: string) {
    return this.contract.getMarketInfo(baseToken)
  }
}
