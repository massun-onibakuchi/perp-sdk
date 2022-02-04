import { BigNumberish, ethers, Signer } from 'ethers'
import { Base } from '../lib/base'
import type { IVault } from '../abi/types'
import { PerpSDKConfig } from '../types'

export class Vault extends Base {
  contract: IVault

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    super({ provider, privateKey, chainId })

    const metadata = this.loadMetadata('Vault')
    this.contract = new ethers.Contract(metadata['address'], metadata['abi']).connect(this.signer || provider) as IVault
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }

  async decimals() {
    return this.contract.decimals()
  }

  async deposit(token: string, amountX10_D: BigNumberish) {
    return (await this.contract.deposit(token, amountX10_D)).wait()
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
  async withdraw(token: string, amountX10_D: BigNumberish) {
    return (await this.contract.withdraw(token, amountX10_D)).wait()
  }
}
