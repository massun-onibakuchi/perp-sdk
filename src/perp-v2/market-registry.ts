import { Contract } from '@ethersproject/contracts'
import { Base } from '../lib/base'
import type { IMarketRegistry } from '../abi/types'
import type { PerpSDKConfig } from '../types'
import Artifact from '../abi/MarketRegistry.json'

export class MarketRegistry extends Base {
  public contract: IMarketRegistry

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    this.contract = new Contract(Artifact['address'], Artifact['abi'])  as IMarketRegistry

    const signerOrProvider = this.signer || provider
    if (signerOrProvider) {
      this.contract = this.contract.connect(signerOrProvider)
    }
  }

  async getQuoteToken() {
    return this.contract.getQuoteToken()
  }

  async getUniswapV3Factory() {
    return this.contract.getUniswapV3Factory()
  }

  async getMaxOrdersPerMarket() {
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
