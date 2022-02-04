import { ethers } from 'ethers'
import { IERC20 } from '../abi/types'
import { Base } from './base'
import { ChainId } from '../constants'
import { PerpSDKConfig, TokenType } from '../types'

export class Token extends Base {
  /**
   * The contract address on the chain on which this token lives
   */
  address: string

  tokenType: TokenType

  decimals: number

  /**
   * The chain ID on which this currency resides
   */
  chainId: number

  /**
   * The name of the currency, i.e. a descriptive textual non-unique identifier
   */
  name?: string
  /**
   * The symbol of the currency, i.e. a short textual non-unique identifier
   */
  symbol?: string

  isToken: boolean = true

  constructor(
    address: string,
    decimals: number,
    symbol?: string,
    chainId: ChainId = ChainId.Optimism,
    config?: PerpSDKConfig,
    tokenType?: TokenType
  ) {
    super(
      config ?? {
        chainId: 10,
        privateKey: undefined,
        provider: ethers.providers.getDefaultProvider(10),
      }
    )

    this.tokenType = tokenType || (this.symbol && this.symbol.toUpperCase() === 'ETH' ? 'ETH' : 'ERC20')

    this.address = address
    this.decimals = decimals
    this.chainId = chainId
    this.symbol = symbol

    const metadata = this.loadMetadata('IERC20')
    this.contract = new ethers.Contract(address, metadata['abi'], this.provider).connect(
      this.signer || this.provider
    ) as IERC20
  }

  connect(signer: string | ethers.providers.Provider | ethers.Signer) {
    this.contract.connect(signer)
    return this
  }
}
