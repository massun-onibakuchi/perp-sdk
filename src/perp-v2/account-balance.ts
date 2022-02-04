import { ethers } from 'ethers'
import { PerpSDKConfig } from '../types'
import { Base } from '../lib/base'
import type { IAccountBalance } from '../abi/types'

export class AccountBalance extends Base {
  contract: IAccountBalance

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    const metadata = this.loadMetadata('AccountBalance')
    this.contract = new ethers.Contract(metadata['address'], metadata['abi'], provider).connect(
      this.signer || provider
    ) as IAccountBalance
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }

  async getAccountInfo(trader: string, baseToken: string) {
    //@todo Token instanceを返す
    return this.contract.getAccountInfo(trader, baseToken)
  }

  async getBase(trader: string, baseToken: string) {
    return this.contract.getBase(trader, baseToken)
  }

  async getBaseTokens(trader: string) {
    return this.contract.getBaseTokens(trader)
  }

  async getQuote(trader: string, baseToken: string) {
    return this.contract.getQuote(trader, baseToken)
  }

  async getOrderBook() {
    return this.contract.getOrderBook()
  }

  async getTakerOpenNotional(trader: string, baseToken: string) {
    return this.contract.getTakerOpenNotional(trader, baseToken)
  }

  async getTakerPositionSize(trader: string, baseToken: string) {
    return this.contract.getTakerPositionSize(trader, baseToken)
  }

  async getTotalAbsPositionValue(trader: string) {
    return this.contract.getTotalAbsPositionValue(trader)
  }

  async getTotalDebtValue(trader: string) {
    return this.contract.getTotalDebtValue(trader)
  }

  async getTotalOpenNotional(trader: string, baseToken: string) {
    return this.contract.getTotalOpenNotional(trader, baseToken)
  }

  async getTotalPositionSize(trader: string, baseToken: string) {
    return this.contract.getTotalPositionSize(trader, baseToken)
  }

  async getTotalPositionValue(trader: string, baseToken: string) {
    return this.contract.getTotalPositionValue(trader, baseToken)
  }

  async getVault() {
    return this.contract.getVault()
  }

  async getMarginRequirementForLiquidation(trader: string) {
    return this.contract.getMarginRequirementForLiquidation(trader)
  }
  async getPnlAndPendingFee(trader: string) {
    return this.contract.getPnlAndPendingFee(trader)
  }

  async hasOrder(trader: string) {
    return this.contract.hasOrder(trader)
  }
}
