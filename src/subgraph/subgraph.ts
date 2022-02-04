import { GraphQLClient } from 'graphql-request'
import { getSdk, Sdk } from './generated/perp-v2-subgraph-types'

export * from './generated/perp-v2-subgraph-types'

export type SubgraphClient = Sdk

export function createSubgraphClient(subgraphUrl: string): SubgraphClient {
  const client = new GraphQLClient(subgraphUrl)
  return getSdk(client)
}
