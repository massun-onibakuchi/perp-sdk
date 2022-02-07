import { Wallet } from '@ethersproject/wallet'
import invariant from 'tiny-invariant'
import { ChainId } from '../constants'
import { Provider } from '@ethersproject/providers'
import type { Signer } from '@ethersproject/abstract-signer'
import type { PerpSDKConfig } from '../types'

export abstract class Base {
  public contract!: any
  public readonly provider: Provider | undefined
  public readonly signer: Signer | undefined
  public readonly chainId: ChainId
  public readonly isToken: boolean = false

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    invariant(Provider.isProvider(provider), 'PROVIDER')
    this.provider = provider

    if (chainId) {
      invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')
    } else {
      chainId = ChainId.Optimism
    }

    this.chainId = chainId

    if (privateKey) {
      this.signer = new Wallet(privateKey, provider)
    }
  }

  connect(signer: string | Provider | Signer) {
    this.contract = this.contract.connect(signer)
    return this
  }
}
