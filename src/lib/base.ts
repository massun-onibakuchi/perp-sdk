import invariant from 'tiny-invariant'
import { ethers, Signer, Contract } from 'ethers'
import { ChainId } from '../constants'
import type { PerpSDKConfig, Provider } from '../types'

export abstract class Base {
  public provider: Provider | undefined
  public signer: Signer | undefined
  public contract!: Contract
  public readonly chainId: ChainId
  public readonly isToken: boolean = false

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    if (provider) {
      this.provider = provider
    }

    if (chainId) {
      invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')
    } else {
      chainId = 10
    }

    this.chainId = chainId

    if (privateKey) {
      this.signer = new ethers.Wallet(privateKey)
    }
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract = this.contract.connect(signer)
    return this
  }
}
