import type { Provider } from '@ethersproject/providers'
import { ChainId } from './constants'

type PerpSDKConfig = {
  provider: Provider
  privateKey?: any
  chainId?: ChainId
}

type TokenType = 'ETH' | 'ERC20'

export { PerpSDKConfig, Provider, TokenType }
