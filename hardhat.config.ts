import * as dotenv from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@typechain/hardhat'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: '0.7.6',
  networks: {},
  typechain: {
    outDir: 'src/abi/types',
  },
}

export default config
