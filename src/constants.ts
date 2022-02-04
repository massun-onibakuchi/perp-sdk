export enum ChainId {
  Optimism = 10,
  OptimismKovan = 69,
  ArbitrumRinkeby = 421611,
}

export const NETWORKS = {
  [ChainId.Optimism]: 'optimism',
  [ChainId.OptimismKovan]: 'optimismKovan',
  [ChainId.ArbitrumRinkeby]: 'arbitrumRinkeby',
}

export const USDC_ADDRESSES = {
  [ChainId.Optimism]: '0x0',
}
