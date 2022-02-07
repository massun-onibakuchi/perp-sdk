import * as dotenv from 'dotenv'
import { JsonRpcProvider } from '@ethersproject/providers'
import { ChainId, PERP_V2_NETWORK_CONFIG, Token, USDC } from '../src/index'
import { Wallet } from '@ethersproject/wallet'

dotenv.config()
jest.setTimeout(30 * 1000)

const provider = new JsonRpcProvider(process.env.PROVIDER_URL)
const signer = Wallet.fromMnemonic(process.env.MNEMONIC!).connect(provider)
const vault = PERP_V2_NETWORK_CONFIG[ChainId.Optimism].addresses.contracts.vault

describe('USDC', () => {
  let usdc: Token

  beforeAll(async () => {
    usdc = new USDC({ provider, privateKey: signer.privateKey, chainId: ChainId.Optimism })
  })

  test('Get Symbol', async () => {
    expect(usdc.symbol).toEqual('USDC')
  })

  test('Get Decimals', async () => {
    expect(usdc.decimals).toEqual(6)
  })

  test('Get Address', async () => {
    expect(usdc.address).toEqual(PERP_V2_NETWORK_CONFIG[ChainId.Optimism].addresses.tokens.usdc)
  })

  test('Get Balance', async () => {
    const balance = await usdc.balanceOf(signer.address)
    expect(balance).toBeDefined()
  })

  test('Get Allowance', async () => {
    expect(await usdc.allowance(signer.address, vault)).toBeDefined()
  })
})
