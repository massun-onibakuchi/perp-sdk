import * as dotenv from 'dotenv'
import { createSubgraphClient } from '../subgraph'

dotenv.config()

async function main() {
  const endpoint = 'https://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism'

  const client = createSubgraphClient(process.env.PERP_V2_SUBGRAPH_URL || endpoint)

  // List open orders
  const { openOrders } = await client.OpenOrders({
    first: 3,
    where: { liquidity_gt: '100000000', baseToken_contains: '0x8c835dfaa34e2ae61775e80ee29e2c724c6ae2bb' },
  })
  console.log('openOrders :>> ', openOrders)
}

main().catch(error => console.error(error))
