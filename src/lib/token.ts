import { BigNumberish, ethers, Overrides } from 'ethers'
import invariant from 'tiny-invariant'
import { IERC20 } from '../abi/types'
import { Base } from './base'
import { PerpSDKConfig, TokenType } from '../types'

export class Token extends Base {
  /**
   * The contract address on the chain on which this token lives
   */
  public readonly address: string

  public readonly tokenType: TokenType = 'ERC20'

  public readonly decimals: number

  /**
   * The symbol of the currency, i.e. a short textual non-unique identifier
   */
  public readonly symbol: string

  public readonly isToken: boolean = true

  public contract: IERC20

  constructor(address: string, decimals: number, symbol: string, { provider, chainId, privateKey }: PerpSDKConfig) {
    super({
      provider,
      chainId,
      privateKey,
    })
    invariant(decimals >= 0 && decimals < 255 && Number.isInteger(decimals), 'DECIMALS')
    invariant(symbol.toUpperCase() != 'ETH', 'ERC20 TOKEN')

    this.address = address
    this.decimals = decimals
    this.symbol = symbol

    const metadata = this.loadMetadata('IERC20', 'common')
    this.contract = new ethers.Contract(address, metadata['abi']) as IERC20

    const signerOrProvider = this.signer || this.provider
    if (signerOrProvider) {
      this.contract = this.contract.connect(signerOrProvider)
    }
  }

  async approve(spender: string, amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) {
    return (await this.contract.approve(spender, amount, overrides)).wait()
  }

  async transfer(recipient: string, amount: BigNumberish, overrides?: Overrides & { from?: string | Promise<string> }) {
    return (await this.contract.transfer(recipient, amount, overrides)).wait()
  }

  async transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ) {
    return (await this.contract.transferFrom(sender, recipient, amount, overrides)).wait()
  }

  async allowance(owner: string, spender: string) {
    return this.contract.allowance(owner, spender)
  }

  async balanceOf(account: string) {
    return this.contract.balanceOf(account)
  }

  async name() {
    return this.contract.name()
  }

  async totalSupply() {
    return this.contract.totalSupply()
  }
}
