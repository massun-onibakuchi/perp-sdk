import fs from 'fs'
import invariant from 'tiny-invariant'
import { ethers, Signer } from 'ethers'
import { ChainId, NETWORKS } from '../constants'
import type { PerpSDKConfig, Provider } from '../types'

export abstract class Base {
  provider: Provider | undefined
  signer: Signer | undefined
  chainId: ChainId
  contract: any
  isToken: boolean = false

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    invariant(Number.isSafeInteger(chainId), 'CHAIN_ID')

    if (provider) {
      this.provider = provider
    }

    if (!chainId) {
      chainId = 10
    }
    this.chainId = chainId

    if (privateKey) {
      this.signer = new ethers.Wallet(privateKey)
    }
  }

  protected loadMetadata(contractName: string, overridesDirectory?: string) {
    try {
      return JSON.parse(
        fs.readFileSync(`./src/abi/${overridesDirectory || NETWORKS[this.chainId]}/${contractName}.json`, {
          encoding: 'utf8',
        })
      )
    } catch (error) {
      throw error
    }
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract = this.contract.connect(signer)
    return this
  }
}
