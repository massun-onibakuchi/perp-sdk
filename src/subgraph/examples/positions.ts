import * as dotenv from 'dotenv'
import { createSubgraphClient } from '../subgraph'
import { Position_OrderBy, OrderDirection } from '../generated/perp-v2-subgraph-types'

dotenv.config()

async function main() {
  const endpoint = 'https://api.thegraph.com/subgraphs/name/perpetual-protocol/perpetual-v2-optimism'

  const client = createSubgraphClient(process.env.PERP_V2_SUBGRAPH_URL || endpoint)

  // List positions
  const { positions } = await client.Positions({
    first: 2,
    where: { positionSize_gt: '1000',/*  trader: '0x000000' */ },
    orderBy: Position_OrderBy.PositionSize,
    orderDirection: OrderDirection.Desc,
  })
  console.log('positions :>> ', positions)
}

main().catch(error => console.error(error))
