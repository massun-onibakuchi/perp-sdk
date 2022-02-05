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
  [ChainId.Optimism]: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
  [ChainId.OptimismKovan]: '0x3e22e37Cb472c872B5dE121134cFD1B57Ef06560',
  [ChainId.ArbitrumRinkeby]: '0x96D7704943Da56b4F1aeef18B55486Db90df29F8',
}
