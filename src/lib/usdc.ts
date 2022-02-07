import { Token } from './token'
import { PERP_V2_NETWORK_CONFIG } from '../constants'
import type { PerpSDKConfig } from '../types'
import invariant from 'tiny-invariant'

export class USDC extends Token {
  constructor({ provider, chainId, privateKey }: PerpSDKConfig) {
    invariant(chainId, 'USDC_CHAIN_ID')
    const USDC_ADDRESS = PERP_V2_NETWORK_CONFIG[chainId].addresses.tokens.usdc
    super(USDC_ADDRESS, 6, 'USDC', { provider, chainId, privateKey })
  }
}
