import type { BytesLike } from '@ethersproject/bytes'
import type { Provider } from '@ethersproject/providers'
import type { ChainId } from './constants'

type PerpSDKConfig = {
  provider?: Provider
  privateKey?: BytesLike
  chainId?: ChainId
}

type TokenType = 'ETH' | 'ERC20'

export { PerpSDKConfig, Provider, TokenType }
