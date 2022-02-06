import { BigNumberish } from '@ethersproject/bignumber'
import { Overrides, Contract } from '@ethersproject/contracts'
import invariant from 'tiny-invariant'
import { Base } from './base'
import type { PerpSDKConfig, TokenType } from '../types'
import type { IERC20 } from '../abi/types'
import Artifact from '../abi/IERC20.json'

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

    this.contract = new Contract(address, Artifact['abi']) as IERC20

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
