# Perpetual Protocol V2 SDK

🛠 An JavaScript SDK for interacting with the Perpetual V2

---

### To use Perpetual V2 SDK :

Install the lib using npm or yarn

```bash
yarn add perp-v2-sdk
```

---

### Interacting with contracts

ES6 or TypeScript

```typescript
import { ethers } from 'ethers'
import { ClearingHouse, MarketRegistry, Vault } from 'perp-v2-sdk'

const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL)
const clearingHouse = new ClearingHouse({ provider })
const marketRegistry = new MarketRegistry({ provider })
const valut = new Vault({ provider })
```

##### To get account value of a trader

```javascript
const trader = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'
const value = await clearingHouse.getAccountValue(trader)
```

##### To open a position

```javascript
const reciept = await clearingHouse.openPosition(params)
```

##### To get total position size

```javascript
const trader = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'
const vETH = '0xccc170bdcdaA3c026302B19baef84Ea05C8aFB17'

const accountBalance = new AccountBalance({
  provider
  privateKey: process.env.PRIVATE_KEY
})
const reciept = await accountBalance.getTotalPositionSize(trader, vETH)
```

##### To approve vault to use USDC

```javascript
import { ChainId, USDC } from 'perp-v2-sdk'

const vaultAddress = vault.contract.address
const amount = '1000000000'
const usdc = USDC[ChainId.Optimism]
const reciept = await usdc.connect(signer).approve(vaultAddress, amount)
```

---

## Subgraph Queries

```typescript
import { createSubgraphClient } from 'perp-v2-sdk'

const client = createSubgraphClient(process.env.SUBGRAPH_URL)
```

##### To list markets

```typescript
import { Market_OrderBy, OrderDirection } from 'perp-v2-sdk'

const { markets } = await client.Markets({
  first: 3,
  where: { tradingVolume_gt: '10000000' },
  orderBy: Market_OrderBy.TradingVolume,
  orderDirection: OrderDirection.Desc,
})
```

##### To list positions

```typescript
import { Position_OrderBy, OrderDirection } from 'perp-v2-sdk'

const trader = '0x8B4e846c90a2521F0D2733EaCb56760209EAd51A'
const { positions } = await client.Positions({
  first: 5,
  where: { trader, positionSize_gt: '100' },
  orderBy: Position_OrderBy.PositionSize,
  orderDirection: OrderDirection.Desc,
})
```

---

### To run the example locally:

Created an .env file with these 2 env variables:

```bash
PROVIDER_URL=YOUR_PROVIDRER_URL_OR_ALCHEMY_URL
```

run

```bash
yarn install perp-v2-sdk
```

For local developement you can run

```bash
yarn dev
```

For production build:

```bash
yarn build
```

Which will generate a production build on "dist" folder

## Disclaimer
