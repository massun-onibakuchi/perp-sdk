import * as dotenv from 'dotenv'
import { createSubgraphClient } from '../subgraph'
import { Market_OrderBy, OrderDirection } from '../generated/perp-v2-subgraph-types'

dotenv.config()

async function main() {
  const endpoint = 'https://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism'

  const client = createSubgraphClient(process.env.PERP_V2_SUBGRAPH_URL || endpoint)

  // List markets
  const { markets } = await client.Markets({
    first: 2,
    where: { tradingVolume_gt: '10000000' },
    orderBy: Market_OrderBy.TradingVolume,
    orderDirection: OrderDirection.Desc,
  })
  console.log('markets :>> ', markets)
}

main().catch(error => console.error(error))
