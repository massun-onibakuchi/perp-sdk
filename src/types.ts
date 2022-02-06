import type { BytesLike } from '@ethersproject/bytes'
import type { Provider } from '@ethersproject/providers'
import type { ChainId } from './constants'

type PerpSDKConfig = {
  provider?: Provider
  privateKey?: BytesLike
  chainId?: ChainId
}

type TokenType = 'ETH' | 'ERC20'

export interface PerpV2NetworkConfig {
  chainId: ChainId
  addresses: {
    contracts: {
      vault: string
      marketRegistry: string
      clearingHouse: string
      orderBook: string
      accountBalance: string
      [contract: string]: string
    }
    tokens: {
      usdc: string
      [vToken: string]: string
    }
  }
  urls: {
    subgraph: string | undefined
  }
}

export { PerpSDKConfig, Provider, TokenType }
