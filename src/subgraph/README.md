# Perppetual V2 Optimism Subgraph Queries

A simple utility library to make it easier to interact with the `perpetual-v2-optimism-subgraph` with built-in type safety. All queries are defined in the `graphql` directory.
Anytime a new query is added, run `yarn gen:subgraph` to regenerate the client files, fully typed.

The module leverages `graphql-codegen` and `graphql-request`.

## Usage

```ts
import { createSubgraphClient } from 'perp-v2-sdk'

const client = createSubgraphClient(PERP_V2_SUBGRAPH_URL)

// List open orders
const { openOrders } = await client.OpenOrders({
  first: 3,
  where: { liquidity_gt: '100000000', baseToken_contains: '0x8c835dfaa34e2ae61775e80ee29e2c724c6ae2bb' },
})
```

[Examples](./examples/markets.ts)

## Adding new queries

Refer to any existing query in the `graphql` directory as a reference when first getting started.

1. Add the query to an existing `.graphql` file or create a new one in the `graphql` directory.
2. Run `yarn gen:subgraph`
3. Access the query from the generated client using `client.QueryName`

All queries get exactly typed, so if you query a partial reference to an underlying model, only the quereied fields will be available. If you need to reference the type created by the query, create a fragment and use that fragment in your query.

```graphql
fragment SubgraphMarket on Market {
  id
  baseToken
  quoteToken
  pool
  feeRatio
  tradingVolume
  tradingFee
  baseAmount
  quoteAmount
  positions(first: 50) {
    id
  }
}

query Market($id: ID!, $block: Block_height) {
  market(id: $id, block: $block) {
    ...SubgraphMarket
  }
}
```

The generated type will be exported from the module suffixed with `Fragment`. So in this example, your type is named: `SubgraphMarketFragment`.

```ts
import { SubgraphMarketFragment } from './perp-v2-subgraph-types'

// List markets
const { markets } = await client.Markets({
  first: 5,
  orderBy: Market_OrderBy.TradingVolume,
  orderDirection: OrderDirection.Desc,
})

const market: SubgraphMarketFragment = markets[0]
```

## Resync the schema

Anytime there are schema changes published to `perp-v2-optimism-subgraph`, you'll need to resync the local schema by running `yarn gen:subgraph`.

If the update introduced breaking changes, running `yarn gen:subgraph` will fail and print the necessary changes that need to be made to the console.
