import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.7.6',
  networks: {
    ropsten: {
      url: process.env.ROPSTEN_URL || '',
    },
  },
}

export default config
