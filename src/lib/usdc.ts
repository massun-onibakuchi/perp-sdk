import { ChainId } from '../constants'
import { Token } from './token'

export const USDC: { [chainId: number]: Token } = {
  [ChainId.Optimism]: new Token('0x7F5c764cBc14f9669B88837ca1490cCa17c31607', 6, 'USDC', { chainId: ChainId.Optimism }),
  [ChainId.OptimismKovan]: new Token('0x3e22e37Cb472c872B5dE121134cFD1B57Ef06560', 6, 'USDC', {
    chainId: ChainId.OptimismKovan,
  }),
  [ChainId.ArbitrumRinkeby]: new Token('0x96D7704943Da56b4F1aeef18B55486Db90df29F8', 6, 'USDC', {
    chainId: ChainId.ArbitrumRinkeby,
  }),
}
