import fs from 'fs'
import { ethers, Signer } from 'ethers'
import { ChainId, NETWORKS } from '../constants'
import type { PerpSDKConfig, Provider } from '../types'

export abstract class Base {
  provider: Provider
  signer: Signer | undefined
  chainId: ChainId
  contract: any
  isToken: boolean = false

  constructor({ provider, privateKey, chainId }: PerpSDKConfig) {
    this.provider = provider

    if (!chainId) {
      chainId = 10
    }
    this.chainId = chainId

    if (privateKey) {
      this.signer = new ethers.Wallet(privateKey)
    }
  }

  protected loadMetadata(contractName: string) {
    try {
      return JSON.parse(
        fs.readFileSync(`./src/abi/${NETWORKS[this.chainId]}/${contractName}.json`, { encoding: 'utf8' })
      )
    } catch (error) {
      throw error
    }
  }

  abstract connect(signer: any): this
}
