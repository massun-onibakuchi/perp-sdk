import { PerpV2NetworkConfig } from './types'
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

export const PERP_V2_NETWORK_CONFIG: Record<ChainId, PerpV2NetworkConfig> = {
  [ChainId.Optimism]: {
    chainId: ChainId.Optimism,
    addresses: {
      contracts: {
        vault: '0x23BF79a3EbaE5dD30ab919fF853F795de023BEED',
        clearingHouse: '',
        marketRegistry: '0xd5820eE0F55205f6cdE8BB0647072143b3060067',
        orderBook: '0xcEDf20450c307a552F35F7487D83CD81d4063B11',
        accountBalance: '0x15cC2C5279D85FEBA048C19c55AC2F136Fd85a02',
        exchange: '0xc8486C57f8D1E01b440363dB6f148681b829C685',
        insuranceFund: '0x2d43a9ed77591b16b198e569c426AfF89B02F1C1',
        uniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
        clearingHouseConfig: '0x6F62EA5633726F29B0C18b86c902f62f20f7cBd6',
        quoteToken: '0x24f9c3078c3C832173dE30e2ea71e386A59F7E91',
      },
      tokens: {
        usdc: '0x7F5c764cBc14f9669B88837ca1490cCa17c31607',
        vBTC: '0x26a74a9C08c94d176992312a1f3Fa69601BE4076',
        vETH: '0xccc170bdcdaA3c026302B19baef84Ea05C8aFB17',
      },
    },
    urls: {
      subgraph: 'https://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism',
    },
  },
  [ChainId.OptimismKovan]: {
    chainId: ChainId.Optimism,
    addresses: {
      contracts: {
        vault: '0x87113069Cd05E819B1F009BEEC70dd41594A9D12',
        clearingHouse: '',
        marketRegistry: '0x87c8C92C45B19333aa889f07f8D20C1060BfF134',
        orderBook: '0x8b00D39bDC5211b68849aB057544884e6373BB6b',
        accountBalance: '0xb4E7E8584bEad0A4579F519d8ac49FE8f99C2B06',
        exchange: '0xf1e5a280bBe5362bD9ffa175790108EEE44aC798',
        insuranceFund: '0xaE49Db34671f7b30Da0B2D79E9b78979f8887De1',
        uniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
        clearingHouseConfig: '0x2DE84FeA02D162cB69e14aB6DB1638934D0dAdA2',
        quoteToken: '0x08b618439309B1b97f17cFB5bb6BB2B43a20f831',
      },
      tokens: {
        usdc: '0x3e22e37Cb472c872B5dE121134cFD1B57Ef06560',
        vBTC: '0x362A09EB7D30ECb86DE395291f9D26931Baabc1d',
        vETH: '0xE94184314C0198ebB0a1415122Ff48C4423e3f78',
      },
    },
    urls: { subgraph: undefined },
  },
  [ChainId.ArbitrumRinkeby]: {
    chainId: ChainId.Optimism,
    addresses: {
      contracts: {
        vault: '0x227Bd54c3c61783D588fEE019dCFAAe963036754',
        clearingHouse: '',
        marketRegistry: '0xa25323c65572fBBA982858262b94035b00dCf2aa',
        orderBook: '0xb35EE7751690e9DE9C6461D6db5680B08d25bA23',
        accountBalance: '0x3a43E6321763c766B1bF64974cFB00a747B76FC9',
        exchange: '0x92Cce99f7f7B89C3f66be2d165190283a0C65296',
        insuranceFund: '0xF2027F0d97bA330003143afaE0E3759c1c5bFed4',
        uniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
        clearingHouseConfig: '0x92Cce99f7f7B89C3f66be2d165190283a0C65296',
        quoteToken: '0xb35EE7751690e9DE9C6461D6db5680B08d25bA23',
      },
      tokens: {
        usdc: '0x96D7704943Da56b4F1aeef18B55486Db90df29F8',
        vBTC: '0xB7b887986Cc1DC2Ca4e1e1B94d47600eD3537289',
        vETH: '0xc2b39ff1c5484891812234a2EC9aeFadf52477e1',
      },
    },
    urls: {
      subgraph: undefined,
    },
  },
}
