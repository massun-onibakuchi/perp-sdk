import { Overrides, Contract } from '@ethersproject/contracts'
import { Base } from '../lib/base'
import type { BigNumberish } from '@ethersproject/bignumber'
import type { IVault } from '../abi/types'
import type { PerpSDKConfig } from '../types'
import Artifact from '../abi/Vault.json'

export class Vault extends Base {
  public contract: IVault

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    this.contract = new Contract(Artifact['address'], Artifact['abi']) as IVault

    const signer = this.signer
    if (signer) {
      this.contract = this.contract.connect(signer)
    } else {
      this.contract = this.contract.connect(provider)
    }
  }

  async decimals() {
    return this.contract.decimals()
  }

  async deposit(
    token: string,
    amountX10_D: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ) {
    return (await this.contract.deposit(token, amountX10_D, overrides)).wait()
  }

  async getAccountBalance() {
    return this.contract.getAccountBalance()
  }

  async getBalance(account: string) {
    return this.contract.getBalance(account)
  }

  async getClearingHouse() {
    return this.contract.getClearingHouse()
  }

  async getClearingHouseConfig() {
    return this.contract.getClearingHouseConfig()
  }

  async getExchange() {
    return this.contract.getExchange()
  }

  async getFreeCollateral(trader: string) {
    return this.contract.getFreeCollateral(trader)
  }

  async getFreeCollateralByRatio(trader: string, ratio: BigNumberish) {
    return this.contract.getFreeCollateralByRatio(trader, ratio)
  }

  async getInsuranceFund() {
    return this.contract.getInsuranceFund()
  }

  async getSettlementToken() {
    return this.contract.getSettlementToken()
  }

  async getTotalDebt() {
    return this.contract.getTotalDebt()
  }

  async withdraw(
    token: string,
    amountX10_D: BigNumberish,
    overrides?: Overrides & {
      from?: string | Promise<string>
    }
  ) {
    return (await this.contract.withdraw(token, amountX10_D, overrides)).wait()
  }
}
