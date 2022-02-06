import { Wallet } from '@ethersproject/wallet'
import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import type { Provider } from '@ethersproject/providers'
import type { Signer } from '@ethersproject/abstract-signer'
import type { PerpSDKConfig } from '../types'

export abstract class Base {
  public provider: Provider | undefined
  public signer: Signer | undefined
  public contract!: any
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
      this.signer = new Wallet(privateKey)
    }
  }

  connect(signer: string | Provider | Signer) {
    this.contract = this.contract.connect(signer)
    return this
  }
}
