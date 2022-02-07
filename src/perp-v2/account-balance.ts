import { Contract } from '@ethersproject/contracts'
import { Base } from '../lib/base'
import type { PerpSDKConfig } from '../types'
import type { IAccountBalance } from '../abi/types'
import Artifact from '../abi/AccountBalance.json'

export class AccountBalance extends Base {
  public contract: IAccountBalance

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    this.contract = new Contract(Artifact['address'], Artifact['abi']) as IAccountBalance

    const signer = this.signer
    if (signer) {
      this.contract = this.contract.connect(signer)
    } else {
      this.contract = this.contract.connect(provider)
    }
  }

  async getAccountInfo(trader: string, baseToken: string) {
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
