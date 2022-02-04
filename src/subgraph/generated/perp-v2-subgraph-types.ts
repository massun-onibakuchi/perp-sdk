import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: string;
  BigInt: string;
  Bytes: string;
};

export type BadDebtHappened = {
  __typename?: 'BadDebtHappened';
  /** amount */
  amount: Scalars['BigDecimal'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type BadDebtHappened_Filter = {
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum BadDebtHappened_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  Id = 'id',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Deposited = {
  __typename?: 'Deposited';
  /** amount */
  amount: Scalars['BigDecimal'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** collateralToken address */
  collateralToken: Scalars['Bytes'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type Deposited_Filter = {
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralToken?: InputMaybe<Scalars['Bytes']>;
  collateralToken_contains?: InputMaybe<Scalars['Bytes']>;
  collateralToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralToken_not?: InputMaybe<Scalars['Bytes']>;
  collateralToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Deposited_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  CollateralToken = 'collateralToken',
  Id = 'id',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type FundingPaymentSettled = {
  __typename?: 'FundingPaymentSettled';
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** amount of funding payment */
  fundingPayment: Scalars['BigDecimal'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type FundingPaymentSettled_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fundingPayment?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum FundingPaymentSettled_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type FundingUpdated = {
  __typename?: 'FundingUpdated';
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** daily funding rate */
  dailyFundingRate: Scalars['BigDecimal'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** index price twap */
  indexTwap: Scalars['BigDecimal'];
  /** mark price twap */
  markTwap: Scalars['BigDecimal'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type FundingUpdated_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  dailyFundingRate?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_gt?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_gte?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  dailyFundingRate_lt?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_lte?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_not?: InputMaybe<Scalars['BigDecimal']>;
  dailyFundingRate_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  indexTwap?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_gt?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_gte?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  indexTwap_lt?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_lte?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_not?: InputMaybe<Scalars['BigDecimal']>;
  indexTwap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  markTwap?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_gt?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_gte?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  markTwap_lt?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_lte?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_not?: InputMaybe<Scalars['BigDecimal']>;
  markTwap_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum FundingUpdated_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  DailyFundingRate = 'dailyFundingRate',
  Id = 'id',
  IndexTwap = 'indexTwap',
  MarkTwap = 'markTwap',
  Timestamp = 'timestamp',
  TxHash = 'txHash'
}

export type LiquidityChanged = {
  __typename?: 'LiquidityChanged';
  /** amount of base token added to the liquidity, exclude fee (+: add liquidity, -: remove liquidity) */
  base: Scalars['BigDecimal'];
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** amount of liquidity unit added (+: add liquidity, -: remove liquidity) */
  liquidity: Scalars['BigInt'];
  /** lower tick */
  lowerTick: Scalars['BigInt'];
  /** maker address */
  maker: Scalars['Bytes'];
  /** amount of quote token added to the liquidity, exclude fee (+: add liquidity, -: remove liquidity) */
  quote: Scalars['BigDecimal'];
  /** amount of quote token the maker received as fee */
  quoteFee: Scalars['BigDecimal'];
  /** quoteToken address */
  quoteToken: Scalars['Bytes'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
  /** upper tick */
  upperTick: Scalars['BigInt'];
};

export type LiquidityChanged_Filter = {
  base?: InputMaybe<Scalars['BigDecimal']>;
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  base_gt?: InputMaybe<Scalars['BigDecimal']>;
  base_gte?: InputMaybe<Scalars['BigDecimal']>;
  base_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  base_lt?: InputMaybe<Scalars['BigDecimal']>;
  base_lte?: InputMaybe<Scalars['BigDecimal']>;
  base_not?: InputMaybe<Scalars['BigDecimal']>;
  base_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lowerTick?: InputMaybe<Scalars['BigInt']>;
  lowerTick_gt?: InputMaybe<Scalars['BigInt']>;
  lowerTick_gte?: InputMaybe<Scalars['BigInt']>;
  lowerTick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lowerTick_lt?: InputMaybe<Scalars['BigInt']>;
  lowerTick_lte?: InputMaybe<Scalars['BigInt']>;
  lowerTick_not?: InputMaybe<Scalars['BigInt']>;
  lowerTick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maker?: InputMaybe<Scalars['Bytes']>;
  maker_contains?: InputMaybe<Scalars['Bytes']>;
  maker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  maker_not?: InputMaybe<Scalars['Bytes']>;
  maker_not_contains?: InputMaybe<Scalars['Bytes']>;
  maker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quote?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quoteFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_not?: InputMaybe<Scalars['BigDecimal']>;
  quoteFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quoteToken?: InputMaybe<Scalars['Bytes']>;
  quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_not?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quote_gt?: InputMaybe<Scalars['BigDecimal']>;
  quote_gte?: InputMaybe<Scalars['BigDecimal']>;
  quote_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quote_lt?: InputMaybe<Scalars['BigDecimal']>;
  quote_lte?: InputMaybe<Scalars['BigDecimal']>;
  quote_not?: InputMaybe<Scalars['BigDecimal']>;
  quote_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  upperTick?: InputMaybe<Scalars['BigInt']>;
  upperTick_gt?: InputMaybe<Scalars['BigInt']>;
  upperTick_gte?: InputMaybe<Scalars['BigInt']>;
  upperTick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  upperTick_lt?: InputMaybe<Scalars['BigInt']>;
  upperTick_lte?: InputMaybe<Scalars['BigInt']>;
  upperTick_not?: InputMaybe<Scalars['BigInt']>;
  upperTick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum LiquidityChanged_OrderBy {
  Base = 'base',
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  Id = 'id',
  Liquidity = 'liquidity',
  LowerTick = 'lowerTick',
  Maker = 'maker',
  Quote = 'quote',
  QuoteFee = 'quoteFee',
  QuoteToken = 'quoteToken',
  Timestamp = 'timestamp',
  TxHash = 'txHash',
  UpperTick = 'upperTick'
}

export type Maker = {
  __typename?: 'Maker';
  /** last updated block number */
  blockNumber: Scalars['BigInt'];
  /** total collected maker fee across all openOrders */
  collectedFee: Scalars['BigDecimal'];
  /** format: maker address */
  id: Scalars['ID'];
  /** open orders */
  openOrders: Array<OpenOrder>;
  /** last updated block timestamp */
  timestamp: Scalars['BigInt'];
};


export type MakerOpenOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OpenOrder_Filter>;
};

export type Maker_Filter = {
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFee?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum Maker_OrderBy {
  BlockNumber = 'blockNumber',
  CollectedFee = 'collectedFee',
  Id = 'id',
  OpenOrders = 'openOrders',
  Timestamp = 'timestamp'
}

export type Market = {
  __typename?: 'Market';
  /** provided liquidity base amount */
  baseAmount: Scalars['BigDecimal'];
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** last updated block number */
  blockNumber: Scalars['BigInt'];
  /** block number the pool was added to ClearingHouse */
  blockNumberAdded: Scalars['BigInt'];
  /** fee ratio: 500 (0.05%), 3000 (0.3%), 10000 (1%) */
  feeRatio: Scalars['BigInt'];
  /** format: baseToken address */
  id: Scalars['ID'];
  /** open orders */
  openOrders: Array<OpenOrder>;
  /** pool address */
  pool: Scalars['Bytes'];
  /** positions */
  positions: Array<Position>;
  /** provided liquidity quote amount */
  quoteAmount: Scalars['BigDecimal'];
  /** quoteToken address */
  quoteToken: Scalars['Bytes'];
  /** last updated block timestamp */
  timestamp: Scalars['BigInt'];
  /** block timestamp the pool was added to ClearingHouse */
  timestampAdded: Scalars['BigInt'];
  /** cumulative trading fee */
  tradingFee: Scalars['BigDecimal'];
  /** cumulative trading volume */
  tradingVolume: Scalars['BigDecimal'];
};


export type MarketOpenOrdersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OpenOrder_Filter>;
};


export type MarketPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Position_Filter>;
};

export type Market_Filter = {
  baseAmount?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  baseAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberAdded_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRatio?: InputMaybe<Scalars['BigInt']>;
  feeRatio_gt?: InputMaybe<Scalars['BigInt']>;
  feeRatio_gte?: InputMaybe<Scalars['BigInt']>;
  feeRatio_in?: InputMaybe<Array<Scalars['BigInt']>>;
  feeRatio_lt?: InputMaybe<Scalars['BigInt']>;
  feeRatio_lte?: InputMaybe<Scalars['BigInt']>;
  feeRatio_not?: InputMaybe<Scalars['BigInt']>;
  feeRatio_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  pool?: InputMaybe<Scalars['Bytes']>;
  pool_contains?: InputMaybe<Scalars['Bytes']>;
  pool_in?: InputMaybe<Array<Scalars['Bytes']>>;
  pool_not?: InputMaybe<Scalars['Bytes']>;
  pool_not_contains?: InputMaybe<Scalars['Bytes']>;
  pool_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteAmount?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quoteAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quoteToken?: InputMaybe<Scalars['Bytes']>;
  quoteToken_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  quoteToken_not?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  quoteToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestampAdded?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_gt?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_gte?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestampAdded_lt?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_lte?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_not?: InputMaybe<Scalars['BigInt']>;
  timestampAdded_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tradingFee?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Market_OrderBy {
  BaseAmount = 'baseAmount',
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberAdded = 'blockNumberAdded',
  FeeRatio = 'feeRatio',
  Id = 'id',
  OpenOrders = 'openOrders',
  Pool = 'pool',
  Positions = 'positions',
  QuoteAmount = 'quoteAmount',
  QuoteToken = 'quoteToken',
  Timestamp = 'timestamp',
  TimestampAdded = 'timestampAdded',
  TradingFee = 'tradingFee',
  TradingVolume = 'tradingVolume'
}

export type OpenOrder = {
  __typename?: 'OpenOrder';
  /** provided liquidity base amount */
  baseAmount: Scalars['BigDecimal'];
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** last updated block number */
  blockNumber: Scalars['BigInt'];
  /** total collected maker fee */
  collectedFee: Scalars['BigDecimal'];
  /** collected maker fee in this lifecycle */
  collectedFeeInThisLifecycle: Scalars['BigDecimal'];
  /** format: <maker address>-<baseToken address>-<lowerTick>-<upperTick> */
  id: Scalars['ID'];
  /** current liquidity */
  liquidity: Scalars['BigInt'];
  /** lower tick */
  lowerTick: Scalars['BigInt'];
  /** maker address */
  maker: Scalars['Bytes'];
  /** foreign key to Maker */
  makerRef: Maker;
  /** foreign key to Market */
  marketRef: Market;
  /** provided liquidity quote amount */
  quoteAmount: Scalars['BigDecimal'];
  /** last updated block timestamp */
  timestamp: Scalars['BigInt'];
  /** upper tick */
  upperTick: Scalars['BigInt'];
};

export type OpenOrder_Filter = {
  baseAmount?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  baseAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  baseAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectedFee?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFeeInThisLifecycle_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFeeInThisLifecycle_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collectedFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_not?: InputMaybe<Scalars['BigDecimal']>;
  collectedFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidity?: InputMaybe<Scalars['BigInt']>;
  liquidity_gt?: InputMaybe<Scalars['BigInt']>;
  liquidity_gte?: InputMaybe<Scalars['BigInt']>;
  liquidity_in?: InputMaybe<Array<Scalars['BigInt']>>;
  liquidity_lt?: InputMaybe<Scalars['BigInt']>;
  liquidity_lte?: InputMaybe<Scalars['BigInt']>;
  liquidity_not?: InputMaybe<Scalars['BigInt']>;
  liquidity_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lowerTick?: InputMaybe<Scalars['BigInt']>;
  lowerTick_gt?: InputMaybe<Scalars['BigInt']>;
  lowerTick_gte?: InputMaybe<Scalars['BigInt']>;
  lowerTick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lowerTick_lt?: InputMaybe<Scalars['BigInt']>;
  lowerTick_lte?: InputMaybe<Scalars['BigInt']>;
  lowerTick_not?: InputMaybe<Scalars['BigInt']>;
  lowerTick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maker?: InputMaybe<Scalars['Bytes']>;
  makerRef?: InputMaybe<Scalars['String']>;
  makerRef_contains?: InputMaybe<Scalars['String']>;
  makerRef_ends_with?: InputMaybe<Scalars['String']>;
  makerRef_gt?: InputMaybe<Scalars['String']>;
  makerRef_gte?: InputMaybe<Scalars['String']>;
  makerRef_in?: InputMaybe<Array<Scalars['String']>>;
  makerRef_lt?: InputMaybe<Scalars['String']>;
  makerRef_lte?: InputMaybe<Scalars['String']>;
  makerRef_not?: InputMaybe<Scalars['String']>;
  makerRef_not_contains?: InputMaybe<Scalars['String']>;
  makerRef_not_ends_with?: InputMaybe<Scalars['String']>;
  makerRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  makerRef_not_starts_with?: InputMaybe<Scalars['String']>;
  makerRef_starts_with?: InputMaybe<Scalars['String']>;
  maker_contains?: InputMaybe<Scalars['Bytes']>;
  maker_in?: InputMaybe<Array<Scalars['Bytes']>>;
  maker_not?: InputMaybe<Scalars['Bytes']>;
  maker_not_contains?: InputMaybe<Scalars['Bytes']>;
  maker_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  marketRef?: InputMaybe<Scalars['String']>;
  marketRef_contains?: InputMaybe<Scalars['String']>;
  marketRef_ends_with?: InputMaybe<Scalars['String']>;
  marketRef_gt?: InputMaybe<Scalars['String']>;
  marketRef_gte?: InputMaybe<Scalars['String']>;
  marketRef_in?: InputMaybe<Array<Scalars['String']>>;
  marketRef_lt?: InputMaybe<Scalars['String']>;
  marketRef_lte?: InputMaybe<Scalars['String']>;
  marketRef_not?: InputMaybe<Scalars['String']>;
  marketRef_not_contains?: InputMaybe<Scalars['String']>;
  marketRef_not_ends_with?: InputMaybe<Scalars['String']>;
  marketRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketRef_not_starts_with?: InputMaybe<Scalars['String']>;
  marketRef_starts_with?: InputMaybe<Scalars['String']>;
  quoteAmount?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_gt?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_gte?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  quoteAmount_lt?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_lte?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_not?: InputMaybe<Scalars['BigDecimal']>;
  quoteAmount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  upperTick?: InputMaybe<Scalars['BigInt']>;
  upperTick_gt?: InputMaybe<Scalars['BigInt']>;
  upperTick_gte?: InputMaybe<Scalars['BigInt']>;
  upperTick_in?: InputMaybe<Array<Scalars['BigInt']>>;
  upperTick_lt?: InputMaybe<Scalars['BigInt']>;
  upperTick_lte?: InputMaybe<Scalars['BigInt']>;
  upperTick_not?: InputMaybe<Scalars['BigInt']>;
  upperTick_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum OpenOrder_OrderBy {
  BaseAmount = 'baseAmount',
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  CollectedFee = 'collectedFee',
  CollectedFeeInThisLifecycle = 'collectedFeeInThisLifecycle',
  Id = 'id',
  Liquidity = 'liquidity',
  LowerTick = 'lowerTick',
  Maker = 'maker',
  MakerRef = 'makerRef',
  MarketRef = 'marketRef',
  QuoteAmount = 'quoteAmount',
  Timestamp = 'timestamp',
  UpperTick = 'upperTick'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PnlRealized = {
  __typename?: 'PnlRealized';
  /** amount */
  amount: Scalars['BigDecimal'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type PnlRealized_Filter = {
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum PnlRealized_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  Id = 'id',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type Position = {
  __typename?: 'Position';
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** last updated block number */
  blockNumber: Scalars['BigInt'];
  /** average entry price of the current position = abs(openNotional / positionSize) */
  entryPrice: Scalars['BigDecimal'];
  /** cumulative funding payment: - is received and + is sent */
  fundingPayment: Scalars['BigDecimal'];
  /** format: <trader address>-<baseToken address> */
  id: Scalars['ID'];
  /** cumulative liquidation fee */
  liquidationFee: Scalars['BigDecimal'];
  /** foreign key to Market */
  marketRef: Market;
  /** average open notional of the current position */
  openNotional: Scalars['BigDecimal'];
  /** current position size */
  positionSize: Scalars['BigDecimal'];
  /** cumulative realize pnl */
  realizedPnl: Scalars['BigDecimal'];
  /** last updated block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** foreign key to Trader */
  traderRef: Trader;
  /** cumulative trading fee */
  tradingFee: Scalars['BigDecimal'];
  /** cumulative trading volume */
  tradingVolume: Scalars['BigDecimal'];
};

export type PositionChanged = {
  __typename?: 'PositionChanged';
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** average entry price after this tx = abs(position.openNotional / position.positionSize) */
  entryPriceAfter: Scalars['BigDecimal'];
  /** exchanged position notional: - is long and + is short */
  exchangedPositionNotional: Scalars['BigDecimal'];
  /** exchanged position size: + is long and - is short */
  exchangedPositionSize: Scalars['BigDecimal'];
  /** trading fee */
  fee: Scalars['BigDecimal'];
  /** from function signature */
  fromFunctionSignature: Scalars['Bytes'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** market price after this tx */
  marketPriceAfter: Scalars['BigDecimal'];
  /** average open notional after this tx */
  openNotional: Scalars['BigDecimal'];
  /** position size after this tx */
  positionSizeAfter: Scalars['BigDecimal'];
  /** realized pnl of this tx */
  realizedPnl: Scalars['BigDecimal'];
  /** referrer code as passed in to the contract, this is automatically provided when interacting with perp front end */
  referralCode?: Maybe<ReferralCode>;
  /** swapped price of this tx = abs(exchangedPositionNotionalWithFee / exchangedPositionSize) */
  swappedPrice: Scalars['BigDecimal'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type PositionChanged_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entryPriceAfter?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryPriceAfter_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_not?: InputMaybe<Scalars['BigDecimal']>;
  entryPriceAfter_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangedPositionNotional?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangedPositionNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangedPositionSize?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_gt?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_gte?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  exchangedPositionSize_lt?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_lte?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_not?: InputMaybe<Scalars['BigDecimal']>;
  exchangedPositionSize_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fee?: InputMaybe<Scalars['BigDecimal']>;
  fee_gt?: InputMaybe<Scalars['BigDecimal']>;
  fee_gte?: InputMaybe<Scalars['BigDecimal']>;
  fee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fee_lt?: InputMaybe<Scalars['BigDecimal']>;
  fee_lte?: InputMaybe<Scalars['BigDecimal']>;
  fee_not?: InputMaybe<Scalars['BigDecimal']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fromFunctionSignature?: InputMaybe<Scalars['Bytes']>;
  fromFunctionSignature_contains?: InputMaybe<Scalars['Bytes']>;
  fromFunctionSignature_in?: InputMaybe<Array<Scalars['Bytes']>>;
  fromFunctionSignature_not?: InputMaybe<Scalars['Bytes']>;
  fromFunctionSignature_not_contains?: InputMaybe<Scalars['Bytes']>;
  fromFunctionSignature_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  marketPriceAfter?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_gt?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_gte?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketPriceAfter_lt?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_lte?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_not?: InputMaybe<Scalars['BigDecimal']>;
  marketPriceAfter_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNotional?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSizeAfter?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_gt?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_gte?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSizeAfter_lt?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_lte?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_not?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAfter_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  referralCode?: InputMaybe<Scalars['String']>;
  referralCode_contains?: InputMaybe<Scalars['String']>;
  referralCode_ends_with?: InputMaybe<Scalars['String']>;
  referralCode_gt?: InputMaybe<Scalars['String']>;
  referralCode_gte?: InputMaybe<Scalars['String']>;
  referralCode_in?: InputMaybe<Array<Scalars['String']>>;
  referralCode_lt?: InputMaybe<Scalars['String']>;
  referralCode_lte?: InputMaybe<Scalars['String']>;
  referralCode_not?: InputMaybe<Scalars['String']>;
  referralCode_not_contains?: InputMaybe<Scalars['String']>;
  referralCode_not_ends_with?: InputMaybe<Scalars['String']>;
  referralCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  referralCode_not_starts_with?: InputMaybe<Scalars['String']>;
  referralCode_starts_with?: InputMaybe<Scalars['String']>;
  swappedPrice?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  swappedPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  swappedPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum PositionChanged_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  EntryPriceAfter = 'entryPriceAfter',
  ExchangedPositionNotional = 'exchangedPositionNotional',
  ExchangedPositionSize = 'exchangedPositionSize',
  Fee = 'fee',
  FromFunctionSignature = 'fromFunctionSignature',
  Id = 'id',
  MarketPriceAfter = 'marketPriceAfter',
  OpenNotional = 'openNotional',
  PositionSizeAfter = 'positionSizeAfter',
  RealizedPnl = 'realizedPnl',
  ReferralCode = 'referralCode',
  SwappedPrice = 'swappedPrice',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type PositionHistory = {
  __typename?: 'PositionHistory';
  baseToken: Scalars['Bytes'];
  blockNumber: Scalars['BigInt'];
  entryPrice: Scalars['BigDecimal'];
  fundingPayment: Scalars['BigDecimal'];
  /** format: <position id>-<tx hash>-<tx log index> */
  id: Scalars['ID'];
  liquidationFee: Scalars['BigDecimal'];
  openNotional: Scalars['BigDecimal'];
  positionSize: Scalars['BigDecimal'];
  realizedPnl: Scalars['BigDecimal'];
  timestamp: Scalars['BigInt'];
  trader: Scalars['Bytes'];
  tradingFee: Scalars['BigDecimal'];
};

export type PositionHistory_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entryPrice?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidationFee?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNotional?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSize?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_gt?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_gte?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSize_lt?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_lte?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_not?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tradingFee?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum PositionHistory_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  EntryPrice = 'entryPrice',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  LiquidationFee = 'liquidationFee',
  OpenNotional = 'openNotional',
  PositionSize = 'positionSize',
  RealizedPnl = 'realizedPnl',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TradingFee = 'tradingFee'
}

export type PositionLiquidated = {
  __typename?: 'PositionLiquidated';
  /** baseToken address */
  baseToken: Scalars['Bytes'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** liquidation penalty */
  liquidationFee: Scalars['BigDecimal'];
  /** liquidator address */
  liquidator: Scalars['Bytes'];
  /** liquidated position notional abs */
  positionNotionalAbs: Scalars['BigDecimal'];
  /** liquidated position size abs */
  positionSizeAbs: Scalars['BigDecimal'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type PositionLiquidated_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidationFee?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidator?: InputMaybe<Scalars['Bytes']>;
  liquidator_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator_in?: InputMaybe<Array<Scalars['Bytes']>>;
  liquidator_not?: InputMaybe<Scalars['Bytes']>;
  liquidator_not_contains?: InputMaybe<Scalars['Bytes']>;
  liquidator_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  positionNotionalAbs?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_gt?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_gte?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionNotionalAbs_lt?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_lte?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_not?: InputMaybe<Scalars['BigDecimal']>;
  positionNotionalAbs_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSizeAbs?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_gt?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_gte?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSizeAbs_lt?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_lte?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_not?: InputMaybe<Scalars['BigDecimal']>;
  positionSizeAbs_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum PositionLiquidated_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  Id = 'id',
  LiquidationFee = 'liquidationFee',
  Liquidator = 'liquidator',
  PositionNotionalAbs = 'positionNotionalAbs',
  PositionSizeAbs = 'positionSizeAbs',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type Position_Filter = {
  baseToken?: InputMaybe<Scalars['Bytes']>;
  baseToken_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  baseToken_not?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  baseToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  entryPrice?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_gt?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_gte?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  entryPrice_lt?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_lte?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_not?: InputMaybe<Scalars['BigDecimal']>;
  entryPrice_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidationFee?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  marketRef?: InputMaybe<Scalars['String']>;
  marketRef_contains?: InputMaybe<Scalars['String']>;
  marketRef_ends_with?: InputMaybe<Scalars['String']>;
  marketRef_gt?: InputMaybe<Scalars['String']>;
  marketRef_gte?: InputMaybe<Scalars['String']>;
  marketRef_in?: InputMaybe<Array<Scalars['String']>>;
  marketRef_lt?: InputMaybe<Scalars['String']>;
  marketRef_lte?: InputMaybe<Scalars['String']>;
  marketRef_not?: InputMaybe<Scalars['String']>;
  marketRef_not_contains?: InputMaybe<Scalars['String']>;
  marketRef_not_ends_with?: InputMaybe<Scalars['String']>;
  marketRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  marketRef_not_starts_with?: InputMaybe<Scalars['String']>;
  marketRef_starts_with?: InputMaybe<Scalars['String']>;
  openNotional?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_gte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  openNotional_lt?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_lte?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not?: InputMaybe<Scalars['BigDecimal']>;
  openNotional_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSize?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_gt?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_gte?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  positionSize_lt?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_lte?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_not?: InputMaybe<Scalars['BigDecimal']>;
  positionSize_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  traderRef?: InputMaybe<Scalars['String']>;
  traderRef_contains?: InputMaybe<Scalars['String']>;
  traderRef_ends_with?: InputMaybe<Scalars['String']>;
  traderRef_gt?: InputMaybe<Scalars['String']>;
  traderRef_gte?: InputMaybe<Scalars['String']>;
  traderRef_in?: InputMaybe<Array<Scalars['String']>>;
  traderRef_lt?: InputMaybe<Scalars['String']>;
  traderRef_lte?: InputMaybe<Scalars['String']>;
  traderRef_not?: InputMaybe<Scalars['String']>;
  traderRef_not_contains?: InputMaybe<Scalars['String']>;
  traderRef_not_ends_with?: InputMaybe<Scalars['String']>;
  traderRef_not_in?: InputMaybe<Array<Scalars['String']>>;
  traderRef_not_starts_with?: InputMaybe<Scalars['String']>;
  traderRef_starts_with?: InputMaybe<Scalars['String']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tradingFee?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Position_OrderBy {
  BaseToken = 'baseToken',
  BlockNumber = 'blockNumber',
  EntryPrice = 'entryPrice',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  LiquidationFee = 'liquidationFee',
  MarketRef = 'marketRef',
  OpenNotional = 'openNotional',
  PositionSize = 'positionSize',
  RealizedPnl = 'realizedPnl',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TraderRef = 'traderRef',
  TradingFee = 'tradingFee',
  TradingVolume = 'tradingVolume'
}

export type Protocol = {
  __typename?: 'Protocol';
  /** bad debt */
  badDebt: Scalars['BigDecimal'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** chain id */
  chainId: Scalars['String'];
  /** contract version */
  contractVersion: Scalars['String'];
  /** hardcoded as 'perpetual-protocol' */
  id: Scalars['ID'];
  /** network name */
  network: Scalars['String'];
  /** number of public markets */
  publicMarketCount: Scalars['BigInt'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** total value locked */
  totalValueLocked: Scalars['BigDecimal'];
  /** cumulative trading fee */
  tradingFee: Scalars['BigDecimal'];
  /** cumulative trading volume */
  tradingVolume: Scalars['BigDecimal'];
};

export type Protocol_Filter = {
  badDebt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_gt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_gte?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  badDebt_lt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_lte?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_not?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId?: InputMaybe<Scalars['String']>;
  chainId_contains?: InputMaybe<Scalars['String']>;
  chainId_ends_with?: InputMaybe<Scalars['String']>;
  chainId_gt?: InputMaybe<Scalars['String']>;
  chainId_gte?: InputMaybe<Scalars['String']>;
  chainId_in?: InputMaybe<Array<Scalars['String']>>;
  chainId_lt?: InputMaybe<Scalars['String']>;
  chainId_lte?: InputMaybe<Scalars['String']>;
  chainId_not?: InputMaybe<Scalars['String']>;
  chainId_not_contains?: InputMaybe<Scalars['String']>;
  chainId_not_ends_with?: InputMaybe<Scalars['String']>;
  chainId_not_in?: InputMaybe<Array<Scalars['String']>>;
  chainId_not_starts_with?: InputMaybe<Scalars['String']>;
  chainId_starts_with?: InputMaybe<Scalars['String']>;
  contractVersion?: InputMaybe<Scalars['String']>;
  contractVersion_contains?: InputMaybe<Scalars['String']>;
  contractVersion_ends_with?: InputMaybe<Scalars['String']>;
  contractVersion_gt?: InputMaybe<Scalars['String']>;
  contractVersion_gte?: InputMaybe<Scalars['String']>;
  contractVersion_in?: InputMaybe<Array<Scalars['String']>>;
  contractVersion_lt?: InputMaybe<Scalars['String']>;
  contractVersion_lte?: InputMaybe<Scalars['String']>;
  contractVersion_not?: InputMaybe<Scalars['String']>;
  contractVersion_not_contains?: InputMaybe<Scalars['String']>;
  contractVersion_not_ends_with?: InputMaybe<Scalars['String']>;
  contractVersion_not_in?: InputMaybe<Array<Scalars['String']>>;
  contractVersion_not_starts_with?: InputMaybe<Scalars['String']>;
  contractVersion_starts_with?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  network?: InputMaybe<Scalars['String']>;
  network_contains?: InputMaybe<Scalars['String']>;
  network_ends_with?: InputMaybe<Scalars['String']>;
  network_gt?: InputMaybe<Scalars['String']>;
  network_gte?: InputMaybe<Scalars['String']>;
  network_in?: InputMaybe<Array<Scalars['String']>>;
  network_lt?: InputMaybe<Scalars['String']>;
  network_lte?: InputMaybe<Scalars['String']>;
  network_not?: InputMaybe<Scalars['String']>;
  network_not_contains?: InputMaybe<Scalars['String']>;
  network_not_ends_with?: InputMaybe<Scalars['String']>;
  network_not_in?: InputMaybe<Array<Scalars['String']>>;
  network_not_starts_with?: InputMaybe<Scalars['String']>;
  network_starts_with?: InputMaybe<Scalars['String']>;
  publicMarketCount?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_gt?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_gte?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  publicMarketCount_lt?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_lte?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_not?: InputMaybe<Scalars['BigInt']>;
  publicMarketCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalValueLocked?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalValueLocked_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not?: InputMaybe<Scalars['BigDecimal']>;
  totalValueLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Protocol_OrderBy {
  BadDebt = 'badDebt',
  BlockNumber = 'blockNumber',
  ChainId = 'chainId',
  ContractVersion = 'contractVersion',
  Id = 'id',
  Network = 'network',
  PublicMarketCount = 'publicMarketCount',
  Timestamp = 'timestamp',
  TotalValueLocked = 'totalValueLocked',
  TradingFee = 'tradingFee',
  TradingVolume = 'tradingVolume'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badDebtHappened?: Maybe<BadDebtHappened>;
  badDebtHappeneds: Array<BadDebtHappened>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  fundingPaymentSettled?: Maybe<FundingPaymentSettled>;
  fundingPaymentSettleds: Array<FundingPaymentSettled>;
  fundingUpdated?: Maybe<FundingUpdated>;
  fundingUpdateds: Array<FundingUpdated>;
  liquidityChanged?: Maybe<LiquidityChanged>;
  liquidityChangeds: Array<LiquidityChanged>;
  maker?: Maybe<Maker>;
  makers: Array<Maker>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  openOrder?: Maybe<OpenOrder>;
  openOrders: Array<OpenOrder>;
  pnlRealized?: Maybe<PnlRealized>;
  pnlRealizeds: Array<PnlRealized>;
  position?: Maybe<Position>;
  positionChanged?: Maybe<PositionChanged>;
  positionChangeds: Array<PositionChanged>;
  positionHistories: Array<PositionHistory>;
  positionHistory?: Maybe<PositionHistory>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  referralCode?: Maybe<ReferralCode>;
  referralCodeDayData?: Maybe<ReferralCodeDayData>;
  referralCodeDayDatas: Array<ReferralCodeDayData>;
  referralCodeTraderDayData?: Maybe<ReferralCodeTraderDayData>;
  referralCodeTraderDayDatas: Array<ReferralCodeTraderDayData>;
  referralCodes: Array<ReferralCode>;
  trader?: Maybe<Trader>;
  traderDayData?: Maybe<TraderDayData>;
  traderDayDatas: Array<TraderDayData>;
  traders: Array<Trader>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryBadDebtHappenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryBadDebtHappenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadDebtHappened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadDebtHappened_Filter>;
};


export type QueryDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};


export type QueryFundingPaymentSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFundingPaymentSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundingPaymentSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPaymentSettled_Filter>;
};


export type QueryFundingUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryFundingUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundingUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingUpdated_Filter>;
};


export type QueryLiquidityChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryLiquidityChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChanged_Filter>;
};


export type QueryMakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Maker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Maker_Filter>;
};


export type QueryMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};


export type QueryOpenOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryOpenOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenOrder_Filter>;
};


export type QueryPnlRealizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPnlRealizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PnlRealized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PnlRealized_Filter>;
};


export type QueryPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionChanged_Filter>;
};


export type QueryPositionHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionHistory_Filter>;
};


export type QueryPositionHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};


export type QueryPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};


export type QueryProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};


export type QueryReferralCodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferralCodeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferralCodeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};


export type QueryReferralCodeTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReferralCodeTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeTraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeTraderDayData_Filter>;
};


export type QueryReferralCodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCode_Filter>;
};


export type QueryTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderDayData_Filter>;
};


export type QueryTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};


export type QueryWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
};

export type ReferralCode = {
  __typename?: 'ReferralCode';
  /** date created at */
  createdAt: Scalars['BigInt'];
  /** day data link */
  dayData?: Maybe<Array<ReferralCodeDayData>>;
  id: Scalars['ID'];
  /** list of registered referees */
  referees: Array<Trader>;
  /** referrer/partner address */
  referrer: Trader;
  /** whether or not the referral code exists in the referral contract */
  registeredOnChain?: Maybe<Scalars['Boolean']>;
  /** how long user has been vip since */
  vipSince?: Maybe<Scalars['BigInt']>;
  /** if user is vip tier */
  vipTier?: Maybe<Scalars['String']>;
};


export type ReferralCodeDayDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};


export type ReferralCodeRefereesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Trader_Filter>;
};

export type ReferralCodeDayData = {
  __typename?: 'ReferralCodeDayData';
  /** a list of referees which have traded on the day */
  activeReferees: Array<Trader>;
  /** timestamp */
  date: Scalars['BigInt'];
  /** total fees paid during day */
  fees: Scalars['BigDecimal'];
  /** format: <referal code>-<day id> */
  id: Scalars['ID'];
  /** a list of new referees added today */
  newReferees: Array<Trader>;
  referralCode: ReferralCode;
  /** trading volume and fees grouped by trader */
  traderData: Array<ReferralCodeTraderDayData>;
  /** total trading volume in notional value */
  tradingVolume: Scalars['BigDecimal'];
};


export type ReferralCodeDayDataActiveRefereesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Trader_Filter>;
};


export type ReferralCodeDayDataNewRefereesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Trader_Filter>;
};


export type ReferralCodeDayDataTraderDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeTraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReferralCodeTraderDayData_Filter>;
};

export type ReferralCodeDayData_Filter = {
  activeReferees?: InputMaybe<Array<Scalars['String']>>;
  activeReferees_contains?: InputMaybe<Array<Scalars['String']>>;
  activeReferees_not?: InputMaybe<Array<Scalars['String']>>;
  activeReferees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  date?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  newReferees?: InputMaybe<Array<Scalars['String']>>;
  newReferees_contains?: InputMaybe<Array<Scalars['String']>>;
  newReferees_not?: InputMaybe<Array<Scalars['String']>>;
  newReferees_not_contains?: InputMaybe<Array<Scalars['String']>>;
  referralCode?: InputMaybe<Scalars['String']>;
  referralCode_contains?: InputMaybe<Scalars['String']>;
  referralCode_ends_with?: InputMaybe<Scalars['String']>;
  referralCode_gt?: InputMaybe<Scalars['String']>;
  referralCode_gte?: InputMaybe<Scalars['String']>;
  referralCode_in?: InputMaybe<Array<Scalars['String']>>;
  referralCode_lt?: InputMaybe<Scalars['String']>;
  referralCode_lte?: InputMaybe<Scalars['String']>;
  referralCode_not?: InputMaybe<Scalars['String']>;
  referralCode_not_contains?: InputMaybe<Scalars['String']>;
  referralCode_not_ends_with?: InputMaybe<Scalars['String']>;
  referralCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  referralCode_not_starts_with?: InputMaybe<Scalars['String']>;
  referralCode_starts_with?: InputMaybe<Scalars['String']>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum ReferralCodeDayData_OrderBy {
  ActiveReferees = 'activeReferees',
  Date = 'date',
  Fees = 'fees',
  Id = 'id',
  NewReferees = 'newReferees',
  ReferralCode = 'referralCode',
  TraderData = 'traderData',
  TradingVolume = 'tradingVolume'
}

export type ReferralCodeTraderDayData = {
  __typename?: 'ReferralCodeTraderDayData';
  /** fees in notional value */
  fees: Scalars['BigDecimal'];
  /** format: <referal code>-<day id>-<trader> */
  id: Scalars['ID'];
  /** relationship to referral day data */
  referralCodeDayData: ReferralCodeDayData;
  /** relationship to trader */
  trader: Trader;
  /** trading volume in notional value */
  tradingVolume: Scalars['BigDecimal'];
};

export type ReferralCodeTraderDayData_Filter = {
  fees?: InputMaybe<Scalars['BigDecimal']>;
  fees_gt?: InputMaybe<Scalars['BigDecimal']>;
  fees_gte?: InputMaybe<Scalars['BigDecimal']>;
  fees_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fees_lt?: InputMaybe<Scalars['BigDecimal']>;
  fees_lte?: InputMaybe<Scalars['BigDecimal']>;
  fees_not?: InputMaybe<Scalars['BigDecimal']>;
  fees_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  referralCodeDayData?: InputMaybe<Scalars['String']>;
  referralCodeDayData_contains?: InputMaybe<Scalars['String']>;
  referralCodeDayData_ends_with?: InputMaybe<Scalars['String']>;
  referralCodeDayData_gt?: InputMaybe<Scalars['String']>;
  referralCodeDayData_gte?: InputMaybe<Scalars['String']>;
  referralCodeDayData_in?: InputMaybe<Array<Scalars['String']>>;
  referralCodeDayData_lt?: InputMaybe<Scalars['String']>;
  referralCodeDayData_lte?: InputMaybe<Scalars['String']>;
  referralCodeDayData_not?: InputMaybe<Scalars['String']>;
  referralCodeDayData_not_contains?: InputMaybe<Scalars['String']>;
  referralCodeDayData_not_ends_with?: InputMaybe<Scalars['String']>;
  referralCodeDayData_not_in?: InputMaybe<Array<Scalars['String']>>;
  referralCodeDayData_not_starts_with?: InputMaybe<Scalars['String']>;
  referralCodeDayData_starts_with?: InputMaybe<Scalars['String']>;
  trader?: InputMaybe<Scalars['String']>;
  trader_contains?: InputMaybe<Scalars['String']>;
  trader_ends_with?: InputMaybe<Scalars['String']>;
  trader_gt?: InputMaybe<Scalars['String']>;
  trader_gte?: InputMaybe<Scalars['String']>;
  trader_in?: InputMaybe<Array<Scalars['String']>>;
  trader_lt?: InputMaybe<Scalars['String']>;
  trader_lte?: InputMaybe<Scalars['String']>;
  trader_not?: InputMaybe<Scalars['String']>;
  trader_not_contains?: InputMaybe<Scalars['String']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']>;
  trader_starts_with?: InputMaybe<Scalars['String']>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum ReferralCodeTraderDayData_OrderBy {
  Fees = 'fees',
  Id = 'id',
  ReferralCodeDayData = 'referralCodeDayData',
  Trader = 'trader',
  TradingVolume = 'tradingVolume'
}

export type ReferralCode_Filter = {
  createdAt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gt?: InputMaybe<Scalars['BigInt']>;
  createdAt_gte?: InputMaybe<Scalars['BigInt']>;
  createdAt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createdAt_lt?: InputMaybe<Scalars['BigInt']>;
  createdAt_lte?: InputMaybe<Scalars['BigInt']>;
  createdAt_not?: InputMaybe<Scalars['BigInt']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  referrer?: InputMaybe<Scalars['String']>;
  referrer_contains?: InputMaybe<Scalars['String']>;
  referrer_ends_with?: InputMaybe<Scalars['String']>;
  referrer_gt?: InputMaybe<Scalars['String']>;
  referrer_gte?: InputMaybe<Scalars['String']>;
  referrer_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_lt?: InputMaybe<Scalars['String']>;
  referrer_lte?: InputMaybe<Scalars['String']>;
  referrer_not?: InputMaybe<Scalars['String']>;
  referrer_not_contains?: InputMaybe<Scalars['String']>;
  referrer_not_ends_with?: InputMaybe<Scalars['String']>;
  referrer_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrer_not_starts_with?: InputMaybe<Scalars['String']>;
  referrer_starts_with?: InputMaybe<Scalars['String']>;
  registeredOnChain?: InputMaybe<Scalars['Boolean']>;
  registeredOnChain_in?: InputMaybe<Array<Scalars['Boolean']>>;
  registeredOnChain_not?: InputMaybe<Scalars['Boolean']>;
  registeredOnChain_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  vipSince?: InputMaybe<Scalars['BigInt']>;
  vipSince_gt?: InputMaybe<Scalars['BigInt']>;
  vipSince_gte?: InputMaybe<Scalars['BigInt']>;
  vipSince_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vipSince_lt?: InputMaybe<Scalars['BigInt']>;
  vipSince_lte?: InputMaybe<Scalars['BigInt']>;
  vipSince_not?: InputMaybe<Scalars['BigInt']>;
  vipSince_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  vipTier?: InputMaybe<Scalars['String']>;
  vipTier_contains?: InputMaybe<Scalars['String']>;
  vipTier_ends_with?: InputMaybe<Scalars['String']>;
  vipTier_gt?: InputMaybe<Scalars['String']>;
  vipTier_gte?: InputMaybe<Scalars['String']>;
  vipTier_in?: InputMaybe<Array<Scalars['String']>>;
  vipTier_lt?: InputMaybe<Scalars['String']>;
  vipTier_lte?: InputMaybe<Scalars['String']>;
  vipTier_not?: InputMaybe<Scalars['String']>;
  vipTier_not_contains?: InputMaybe<Scalars['String']>;
  vipTier_not_ends_with?: InputMaybe<Scalars['String']>;
  vipTier_not_in?: InputMaybe<Array<Scalars['String']>>;
  vipTier_not_starts_with?: InputMaybe<Scalars['String']>;
  vipTier_starts_with?: InputMaybe<Scalars['String']>;
};

export enum ReferralCode_OrderBy {
  CreatedAt = 'createdAt',
  DayData = 'dayData',
  Id = 'id',
  Referees = 'referees',
  Referrer = 'referrer',
  RegisteredOnChain = 'registeredOnChain',
  VipSince = 'vipSince',
  VipTier = 'vipTier'
}

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  badDebtHappened?: Maybe<BadDebtHappened>;
  badDebtHappeneds: Array<BadDebtHappened>;
  deposited?: Maybe<Deposited>;
  depositeds: Array<Deposited>;
  fundingPaymentSettled?: Maybe<FundingPaymentSettled>;
  fundingPaymentSettleds: Array<FundingPaymentSettled>;
  fundingUpdated?: Maybe<FundingUpdated>;
  fundingUpdateds: Array<FundingUpdated>;
  liquidityChanged?: Maybe<LiquidityChanged>;
  liquidityChangeds: Array<LiquidityChanged>;
  maker?: Maybe<Maker>;
  makers: Array<Maker>;
  market?: Maybe<Market>;
  markets: Array<Market>;
  openOrder?: Maybe<OpenOrder>;
  openOrders: Array<OpenOrder>;
  pnlRealized?: Maybe<PnlRealized>;
  pnlRealizeds: Array<PnlRealized>;
  position?: Maybe<Position>;
  positionChanged?: Maybe<PositionChanged>;
  positionChangeds: Array<PositionChanged>;
  positionHistories: Array<PositionHistory>;
  positionHistory?: Maybe<PositionHistory>;
  positionLiquidated?: Maybe<PositionLiquidated>;
  positionLiquidateds: Array<PositionLiquidated>;
  positions: Array<Position>;
  protocol?: Maybe<Protocol>;
  protocols: Array<Protocol>;
  referralCode?: Maybe<ReferralCode>;
  referralCodeDayData?: Maybe<ReferralCodeDayData>;
  referralCodeDayDatas: Array<ReferralCodeDayData>;
  referralCodeTraderDayData?: Maybe<ReferralCodeTraderDayData>;
  referralCodeTraderDayDatas: Array<ReferralCodeTraderDayData>;
  referralCodes: Array<ReferralCode>;
  trader?: Maybe<Trader>;
  traderDayData?: Maybe<TraderDayData>;
  traderDayDatas: Array<TraderDayData>;
  traders: Array<Trader>;
  withdrawn?: Maybe<Withdrawn>;
  withdrawns: Array<Withdrawn>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionBadDebtHappenedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionBadDebtHappenedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<BadDebtHappened_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BadDebtHappened_Filter>;
};


export type SubscriptionDepositedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionDepositedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Deposited_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Deposited_Filter>;
};


export type SubscriptionFundingPaymentSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFundingPaymentSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundingPaymentSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingPaymentSettled_Filter>;
};


export type SubscriptionFundingUpdatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionFundingUpdatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<FundingUpdated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<FundingUpdated_Filter>;
};


export type SubscriptionLiquidityChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionLiquidityChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<LiquidityChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<LiquidityChanged_Filter>;
};


export type SubscriptionMakerArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMakersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Maker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Maker_Filter>;
};


export type SubscriptionMarketArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionMarketsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Market_Filter>;
};


export type SubscriptionOpenOrderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionOpenOrdersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<OpenOrder_Filter>;
};


export type SubscriptionPnlRealizedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPnlRealizedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PnlRealized_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PnlRealized_Filter>;
};


export type SubscriptionPositionArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionChangedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionChangedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionChanged_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionChanged_Filter>;
};


export type SubscriptionPositionHistoriesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionHistory_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionHistory_Filter>;
};


export type SubscriptionPositionHistoryArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionLiquidatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionPositionLiquidatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<PositionLiquidated_Filter>;
};


export type SubscriptionPositionsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Position_Filter>;
};


export type SubscriptionProtocolArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionProtocolsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Protocol_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Protocol_Filter>;
};


export type SubscriptionReferralCodeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferralCodeDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferralCodeDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeDayData_Filter>;
};


export type SubscriptionReferralCodeTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReferralCodeTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCodeTraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCodeTraderDayData_Filter>;
};


export type SubscriptionReferralCodesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReferralCode_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReferralCode_Filter>;
};


export type SubscriptionTraderArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTraderDayDataArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTraderDayDatasArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TraderDayData_Filter>;
};


export type SubscriptionTradersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trader_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trader_Filter>;
};


export type SubscriptionWithdrawnArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionWithdrawnsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Withdrawn_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Withdrawn_Filter>;
};

export type Trader = {
  __typename?: 'Trader';
  /** cumulative bad debt */
  badDebt: Scalars['BigDecimal'];
  /** last updated block number */
  blockNumber: Scalars['BigInt'];
  /** total deposited collateral + cumulative total pnl */
  collateral: Scalars['BigDecimal'];
  dayData?: Maybe<Array<TraderDayData>>;
  /** cumulative funding payment: - is received and + is sent */
  fundingPayment: Scalars['BigDecimal'];
  /** format: trader address */
  id: Scalars['ID'];
  /** cumulative liquidation fee */
  liquidationFee: Scalars['BigDecimal'];
  /** cumulative maker fee */
  makerFee: Scalars['BigDecimal'];
  /** positions */
  positions: Array<Position>;
  /** cumulative realize pnl */
  realizedPnl: Scalars['BigDecimal'];
  /** the referral code the trader has registered to themselve */
  refereeCode?: Maybe<ReferralCode>;
  /** the referral code the trader owns and provides to other traders */
  referrerCode?: Maybe<ReferralCode>;
  /** last updated block timestamp */
  timestamp: Scalars['BigInt'];
  /** cumulative total pnl = realizedPnl (fee included) - fundingPayment - liquidationFee + makerFee */
  totalPnl: Scalars['BigDecimal'];
  /** cumulative trading fee */
  tradingFee: Scalars['BigDecimal'];
  /** cumulative trading volume */
  tradingVolume: Scalars['BigDecimal'];
};


export type TraderDayDataArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<TraderDayData_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TraderDayData_Filter>;
};


export type TraderPositionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Position_Filter>;
};

export type TraderDayData = {
  __typename?: 'TraderDayData';
  /** timestamp */
  date: Scalars['BigInt'];
  /** trading fee aggregated per day for trader */
  fee: Scalars['BigInt'];
  /** format: <trader id>-<day id> */
  id: Scalars['ID'];
  /** total pnl aggregated per day for trader */
  realizedPnl: Scalars['BigInt'];
  trader: Trader;
  /** trading volume aggregated per day for trader */
  tradingVolume: Scalars['BigDecimal'];
};

export type TraderDayData_Filter = {
  date?: InputMaybe<Scalars['BigInt']>;
  date_gt?: InputMaybe<Scalars['BigInt']>;
  date_gte?: InputMaybe<Scalars['BigInt']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']>>;
  date_lt?: InputMaybe<Scalars['BigInt']>;
  date_lte?: InputMaybe<Scalars['BigInt']>;
  date_not?: InputMaybe<Scalars['BigInt']>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee?: InputMaybe<Scalars['BigInt']>;
  fee_gt?: InputMaybe<Scalars['BigInt']>;
  fee_gte?: InputMaybe<Scalars['BigInt']>;
  fee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  fee_lt?: InputMaybe<Scalars['BigInt']>;
  fee_lte?: InputMaybe<Scalars['BigInt']>;
  fee_not?: InputMaybe<Scalars['BigInt']>;
  fee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  realizedPnl?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigInt']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_not?: InputMaybe<Scalars['BigInt']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['String']>;
  trader_contains?: InputMaybe<Scalars['String']>;
  trader_ends_with?: InputMaybe<Scalars['String']>;
  trader_gt?: InputMaybe<Scalars['String']>;
  trader_gte?: InputMaybe<Scalars['String']>;
  trader_in?: InputMaybe<Array<Scalars['String']>>;
  trader_lt?: InputMaybe<Scalars['String']>;
  trader_lte?: InputMaybe<Scalars['String']>;
  trader_not?: InputMaybe<Scalars['String']>;
  trader_not_contains?: InputMaybe<Scalars['String']>;
  trader_not_ends_with?: InputMaybe<Scalars['String']>;
  trader_not_in?: InputMaybe<Array<Scalars['String']>>;
  trader_not_starts_with?: InputMaybe<Scalars['String']>;
  trader_starts_with?: InputMaybe<Scalars['String']>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum TraderDayData_OrderBy {
  Date = 'date',
  Fee = 'fee',
  Id = 'id',
  RealizedPnl = 'realizedPnl',
  Trader = 'trader',
  TradingVolume = 'tradingVolume'
}

export type Trader_Filter = {
  badDebt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_gt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_gte?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  badDebt_lt?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_lte?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_not?: InputMaybe<Scalars['BigDecimal']>;
  badDebt_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateral?: InputMaybe<Scalars['BigDecimal']>;
  collateral_gt?: InputMaybe<Scalars['BigDecimal']>;
  collateral_gte?: InputMaybe<Scalars['BigDecimal']>;
  collateral_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  collateral_lt?: InputMaybe<Scalars['BigDecimal']>;
  collateral_lte?: InputMaybe<Scalars['BigDecimal']>;
  collateral_not?: InputMaybe<Scalars['BigDecimal']>;
  collateral_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_gte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  fundingPayment_lt?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_lte?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not?: InputMaybe<Scalars['BigDecimal']>;
  fundingPayment_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  liquidationFee?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  liquidationFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not?: InputMaybe<Scalars['BigDecimal']>;
  liquidationFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  makerFee?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  makerFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_not?: InputMaybe<Scalars['BigDecimal']>;
  makerFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_gte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  realizedPnl_lt?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_lte?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not?: InputMaybe<Scalars['BigDecimal']>;
  realizedPnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  refereeCode?: InputMaybe<Scalars['String']>;
  refereeCode_contains?: InputMaybe<Scalars['String']>;
  refereeCode_ends_with?: InputMaybe<Scalars['String']>;
  refereeCode_gt?: InputMaybe<Scalars['String']>;
  refereeCode_gte?: InputMaybe<Scalars['String']>;
  refereeCode_in?: InputMaybe<Array<Scalars['String']>>;
  refereeCode_lt?: InputMaybe<Scalars['String']>;
  refereeCode_lte?: InputMaybe<Scalars['String']>;
  refereeCode_not?: InputMaybe<Scalars['String']>;
  refereeCode_not_contains?: InputMaybe<Scalars['String']>;
  refereeCode_not_ends_with?: InputMaybe<Scalars['String']>;
  refereeCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  refereeCode_not_starts_with?: InputMaybe<Scalars['String']>;
  refereeCode_starts_with?: InputMaybe<Scalars['String']>;
  referrerCode?: InputMaybe<Scalars['String']>;
  referrerCode_contains?: InputMaybe<Scalars['String']>;
  referrerCode_ends_with?: InputMaybe<Scalars['String']>;
  referrerCode_gt?: InputMaybe<Scalars['String']>;
  referrerCode_gte?: InputMaybe<Scalars['String']>;
  referrerCode_in?: InputMaybe<Array<Scalars['String']>>;
  referrerCode_lt?: InputMaybe<Scalars['String']>;
  referrerCode_lte?: InputMaybe<Scalars['String']>;
  referrerCode_not?: InputMaybe<Scalars['String']>;
  referrerCode_not_contains?: InputMaybe<Scalars['String']>;
  referrerCode_not_ends_with?: InputMaybe<Scalars['String']>;
  referrerCode_not_in?: InputMaybe<Array<Scalars['String']>>;
  referrerCode_not_starts_with?: InputMaybe<Scalars['String']>;
  referrerCode_starts_with?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalPnl?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_gt?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_gte?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  totalPnl_lt?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_lte?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_not?: InputMaybe<Scalars['BigDecimal']>;
  totalPnl_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingFee_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingFee_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_gte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  tradingVolume_lt?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_lte?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not?: InputMaybe<Scalars['BigDecimal']>;
  tradingVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
};

export enum Trader_OrderBy {
  BadDebt = 'badDebt',
  BlockNumber = 'blockNumber',
  Collateral = 'collateral',
  DayData = 'dayData',
  FundingPayment = 'fundingPayment',
  Id = 'id',
  LiquidationFee = 'liquidationFee',
  MakerFee = 'makerFee',
  Positions = 'positions',
  RealizedPnl = 'realizedPnl',
  RefereeCode = 'refereeCode',
  ReferrerCode = 'referrerCode',
  Timestamp = 'timestamp',
  TotalPnl = 'totalPnl',
  TradingFee = 'tradingFee',
  TradingVolume = 'tradingVolume'
}

export type Withdrawn = {
  __typename?: 'Withdrawn';
  /** amount */
  amount: Scalars['BigDecimal'];
  /** block number */
  blockNumber: Scalars['BigInt'];
  /** (block number * 1000 + tx log index) for sorting */
  blockNumberLogIndex: Scalars['BigInt'];
  /** collateralToken address */
  collateralToken: Scalars['Bytes'];
  /** format: <tx hash>-<tx log index> */
  id: Scalars['ID'];
  /** block timestamp */
  timestamp: Scalars['BigInt'];
  /** trader address */
  trader: Scalars['Bytes'];
  /** transaction hash */
  txHash: Scalars['Bytes'];
};

export type Withdrawn_Filter = {
  amount?: InputMaybe<Scalars['BigDecimal']>;
  amount_gt?: InputMaybe<Scalars['BigDecimal']>;
  amount_gte?: InputMaybe<Scalars['BigDecimal']>;
  amount_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  amount_lt?: InputMaybe<Scalars['BigDecimal']>;
  amount_lte?: InputMaybe<Scalars['BigDecimal']>;
  amount_not?: InputMaybe<Scalars['BigDecimal']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumberLogIndex_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not?: InputMaybe<Scalars['BigInt']>;
  blockNumberLogIndex_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collateralToken?: InputMaybe<Scalars['Bytes']>;
  collateralToken_contains?: InputMaybe<Scalars['Bytes']>;
  collateralToken_in?: InputMaybe<Array<Scalars['Bytes']>>;
  collateralToken_not?: InputMaybe<Scalars['Bytes']>;
  collateralToken_not_contains?: InputMaybe<Scalars['Bytes']>;
  collateralToken_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  trader?: InputMaybe<Scalars['Bytes']>;
  trader_contains?: InputMaybe<Scalars['Bytes']>;
  trader_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trader_not?: InputMaybe<Scalars['Bytes']>;
  trader_not_contains?: InputMaybe<Scalars['Bytes']>;
  trader_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash?: InputMaybe<Scalars['Bytes']>;
  txHash_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_in?: InputMaybe<Array<Scalars['Bytes']>>;
  txHash_not?: InputMaybe<Scalars['Bytes']>;
  txHash_not_contains?: InputMaybe<Scalars['Bytes']>;
  txHash_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
};

export enum Withdrawn_OrderBy {
  Amount = 'amount',
  BlockNumber = 'blockNumber',
  BlockNumberLogIndex = 'blockNumberLogIndex',
  CollateralToken = 'collateralToken',
  Id = 'id',
  Timestamp = 'timestamp',
  Trader = 'trader',
  TxHash = 'txHash'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type MakerQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type MakerQuery = { __typename?: 'Query', maker?: { __typename?: 'Maker', id: string, collectedFee: string, blockNumber: string, timestamp: string, openOrders: Array<{ __typename?: 'OpenOrder', baseToken: string, id: string }> } | null };

export type MakersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Maker_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Maker_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type MakersQuery = { __typename?: 'Query', makers: Array<{ __typename?: 'Maker', id: string, collectedFee: string, blockNumber: string, timestamp: string, openOrders: Array<{ __typename?: 'OpenOrder', baseToken: string, id: string }> }> };

export type SubgraphMakerFragment = { __typename?: 'Maker', id: string, collectedFee: string, blockNumber: string, timestamp: string, openOrders: Array<{ __typename?: 'OpenOrder', baseToken: string, id: string }> };

export type MarketQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type MarketQuery = { __typename?: 'Query', market?: { __typename?: 'Market', id: string, baseToken: string, quoteToken: string, pool: string, feeRatio: string, tradingVolume: string, tradingFee: string, baseAmount: string, quoteAmount: string, blockNumber: string, timestamp: string, blockNumberAdded: string, timestampAdded: string, positions: Array<{ __typename?: 'Position', id: string }>, openOrders: Array<{ __typename?: 'OpenOrder', id: string }> } | null };

export type MarketsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Market_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Market_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type MarketsQuery = { __typename?: 'Query', markets: Array<{ __typename?: 'Market', id: string, baseToken: string, quoteToken: string, pool: string, feeRatio: string, tradingVolume: string, tradingFee: string, baseAmount: string, quoteAmount: string, blockNumber: string, timestamp: string, blockNumberAdded: string, timestampAdded: string, positions: Array<{ __typename?: 'Position', id: string }>, openOrders: Array<{ __typename?: 'OpenOrder', id: string }> }> };

export type SubgraphMarketFragment = { __typename?: 'Market', id: string, baseToken: string, quoteToken: string, pool: string, feeRatio: string, tradingVolume: string, tradingFee: string, baseAmount: string, quoteAmount: string, blockNumber: string, timestamp: string, blockNumberAdded: string, timestampAdded: string, positions: Array<{ __typename?: 'Position', id: string }>, openOrders: Array<{ __typename?: 'OpenOrder', id: string }> };

export type OpenOrderQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type OpenOrderQuery = { __typename?: 'Query', openOrder?: { __typename?: 'OpenOrder', id: string, maker: string, baseToken: string, lowerTick: string, upperTick: string, baseAmount: string, quoteAmount: string, liquidity: string, collectedFee: string, collectedFeeInThisLifecycle: string, blockNumber: string, timestamp: string, makerRef: { __typename?: 'Maker', id: string }, marketRef: { __typename?: 'Market', id: string } } | null };

export type OpenOrdersQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<OpenOrder_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<OpenOrder_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type OpenOrdersQuery = { __typename?: 'Query', openOrders: Array<{ __typename?: 'OpenOrder', id: string, maker: string, baseToken: string, lowerTick: string, upperTick: string, baseAmount: string, quoteAmount: string, liquidity: string, collectedFee: string, collectedFeeInThisLifecycle: string, blockNumber: string, timestamp: string, makerRef: { __typename?: 'Maker', id: string }, marketRef: { __typename?: 'Market', id: string } }> };

export type SubgraphOpenOrderFragment = { __typename?: 'OpenOrder', id: string, maker: string, baseToken: string, lowerTick: string, upperTick: string, baseAmount: string, quoteAmount: string, liquidity: string, collectedFee: string, collectedFeeInThisLifecycle: string, blockNumber: string, timestamp: string, makerRef: { __typename?: 'Maker', id: string }, marketRef: { __typename?: 'Market', id: string } };

export type PositionQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type PositionQuery = { __typename?: 'Query', position?: { __typename?: 'Position', id: string, trader: string, baseToken: string, positionSize: string, openNotional: string, realizedPnl: string, entryPrice: string, fundingPayment: string, tradingFee: string, tradingVolume: string, liquidationFee: string, blockNumber: string, timestamp: string, traderRef: { __typename?: 'Trader', id: string }, marketRef: { __typename?: 'Market', id: string } } | null };

export type PositionsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Position_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<Position_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type PositionsQuery = { __typename?: 'Query', positions: Array<{ __typename?: 'Position', id: string, trader: string, baseToken: string, positionSize: string, openNotional: string, realizedPnl: string, entryPrice: string, fundingPayment: string, tradingFee: string, tradingVolume: string, liquidationFee: string, blockNumber: string, timestamp: string, traderRef: { __typename?: 'Trader', id: string }, marketRef: { __typename?: 'Market', id: string } }> };

export type SubgraphPositionFragment = { __typename?: 'Position', id: string, trader: string, baseToken: string, positionSize: string, openNotional: string, realizedPnl: string, entryPrice: string, fundingPayment: string, tradingFee: string, tradingVolume: string, liquidationFee: string, blockNumber: string, timestamp: string, traderRef: { __typename?: 'Trader', id: string }, marketRef: { __typename?: 'Market', id: string } };

export type PositionLiquidatedQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type PositionLiquidatedQuery = { __typename?: 'Query', positionLiquidated?: { __typename?: 'PositionLiquidated', txHash: string, trader: string, baseToken: string, liquidator: string, positionSizeAbs: string, positionNotionalAbs: string, liquidationFee: string, blockNumber: string, timestamp: string } | null };

export type PositionLiquidatedsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<PositionLiquidated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  where?: InputMaybe<PositionLiquidated_Filter>;
  block?: InputMaybe<Block_Height>;
}>;


export type PositionLiquidatedsQuery = { __typename?: 'Query', positionLiquidateds: Array<{ __typename?: 'PositionLiquidated', txHash: string, trader: string, baseToken: string, liquidator: string, positionSizeAbs: string, positionNotionalAbs: string, liquidationFee: string, blockNumber: string, timestamp: string }> };

export type SubgraphPositionLiquidatedFragment = { __typename?: 'PositionLiquidated', txHash: string, trader: string, baseToken: string, liquidator: string, positionSizeAbs: string, positionNotionalAbs: string, liquidationFee: string, blockNumber: string, timestamp: string };

export type TraderQueryVariables = Exact<{
  id: Scalars['ID'];
  block?: InputMaybe<Block_Height>;
}>;


export type TraderQuery = { __typename?: 'Query', trader?: { __typename?: 'Trader', collateral: string, tradingVolume: string, realizedPnl: string, fundingPayment: string, tradingFee: string, liquidationFee: string, makerFee: string, badDebt: string, totalPnl: string, blockNumber: string, timestamp: string, positions: Array<{ __typename?: 'Position', baseToken: string, positionSize: string, openNotional: string, entryPrice: string, realizedPnl: string, fundingPayment: string, tradingFee: string, liquidationFee: string }>, dayData?: Array<{ __typename?: 'TraderDayData', id: string, tradingVolume: string, fee: string, realizedPnl: string }> | null } | null };

export type SubgraphTraderFragment = { __typename?: 'Trader', collateral: string, tradingVolume: string, realizedPnl: string, fundingPayment: string, tradingFee: string, liquidationFee: string, makerFee: string, badDebt: string, totalPnl: string, blockNumber: string, timestamp: string, positions: Array<{ __typename?: 'Position', baseToken: string, positionSize: string, openNotional: string, entryPrice: string, realizedPnl: string, fundingPayment: string, tradingFee: string, liquidationFee: string }>, dayData?: Array<{ __typename?: 'TraderDayData', id: string, tradingVolume: string, fee: string, realizedPnl: string }> | null };

export const SubgraphMakerFragmentDoc = gql`
    fragment SubgraphMaker on Maker {
  id
  collectedFee
  blockNumber
  timestamp
  openOrders {
    baseToken
    id
  }
}
    `;
export const SubgraphMarketFragmentDoc = gql`
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
  blockNumber
  timestamp
  blockNumberAdded
  timestampAdded
  positions(first: 50) {
    id
  }
  openOrders(first: 100) {
    id
  }
}
    `;
export const SubgraphOpenOrderFragmentDoc = gql`
    fragment SubgraphOpenOrder on OpenOrder {
  id
  maker
  baseToken
  lowerTick
  upperTick
  baseAmount
  quoteAmount
  liquidity
  collectedFee
  collectedFeeInThisLifecycle
  blockNumber
  timestamp
  makerRef {
    id
  }
  marketRef {
    id
  }
}
    `;
export const SubgraphPositionFragmentDoc = gql`
    fragment SubgraphPosition on Position {
  id
  trader
  baseToken
  positionSize
  openNotional
  realizedPnl
  entryPrice
  fundingPayment
  tradingFee
  tradingVolume
  liquidationFee
  blockNumber
  timestamp
  traderRef {
    id
  }
  marketRef {
    id
  }
}
    `;
export const SubgraphPositionLiquidatedFragmentDoc = gql`
    fragment SubgraphPositionLiquidated on PositionLiquidated {
  txHash
  trader
  baseToken
  liquidator
  positionSizeAbs
  positionNotionalAbs
  liquidationFee
  blockNumber
  timestamp
}
    `;
export const SubgraphTraderFragmentDoc = gql`
    fragment SubgraphTrader on Trader {
  collateral
  tradingVolume
  realizedPnl
  fundingPayment
  tradingFee
  liquidationFee
  makerFee
  badDebt
  totalPnl
  blockNumber
  timestamp
  positions {
    baseToken
    positionSize
    openNotional
    entryPrice
    realizedPnl
    fundingPayment
    tradingFee
    liquidationFee
  }
  dayData {
    id
    tradingVolume
    fee
    realizedPnl
  }
}
    `;
export const MakerDocument = gql`
    query Maker($id: ID!, $block: Block_height) {
  maker(id: $id, block: $block) {
    ...SubgraphMaker
  }
}
    ${SubgraphMakerFragmentDoc}`;
export const MakersDocument = gql`
    query Makers($skip: Int, $first: Int, $orderBy: Maker_orderBy, $orderDirection: OrderDirection, $where: Maker_filter, $block: Block_height) {
  makers(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...SubgraphMaker
  }
}
    ${SubgraphMakerFragmentDoc}`;
export const MarketDocument = gql`
    query Market($id: ID!, $block: Block_height) {
  market(id: $id, block: $block) {
    ...SubgraphMarket
  }
}
    ${SubgraphMarketFragmentDoc}`;
export const MarketsDocument = gql`
    query Markets($skip: Int, $first: Int, $orderBy: Market_orderBy, $orderDirection: OrderDirection, $where: Market_filter, $block: Block_height) {
  markets(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...SubgraphMarket
  }
}
    ${SubgraphMarketFragmentDoc}`;
export const OpenOrderDocument = gql`
    query OpenOrder($id: ID!, $block: Block_height) {
  openOrder(id: $id, block: $block) {
    ...SubgraphOpenOrder
  }
}
    ${SubgraphOpenOrderFragmentDoc}`;
export const OpenOrdersDocument = gql`
    query OpenOrders($skip: Int, $first: Int, $orderBy: OpenOrder_orderBy, $orderDirection: OrderDirection, $where: OpenOrder_filter, $block: Block_height) {
  openOrders(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...SubgraphOpenOrder
  }
}
    ${SubgraphOpenOrderFragmentDoc}`;
export const PositionDocument = gql`
    query Position($id: ID!, $block: Block_height) {
  position(id: $id, block: $block) {
    ...SubgraphPosition
  }
}
    ${SubgraphPositionFragmentDoc}`;
export const PositionsDocument = gql`
    query Positions($skip: Int, $first: Int, $orderBy: Position_orderBy, $orderDirection: OrderDirection, $where: Position_filter, $block: Block_height) {
  positions(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...SubgraphPosition
  }
}
    ${SubgraphPositionFragmentDoc}`;
export const PositionLiquidatedDocument = gql`
    query PositionLiquidated($id: ID!, $block: Block_height) {
  positionLiquidated(id: $id, block: $block) {
    ...SubgraphPositionLiquidated
  }
}
    ${SubgraphPositionLiquidatedFragmentDoc}`;
export const PositionLiquidatedsDocument = gql`
    query PositionLiquidateds($skip: Int, $first: Int, $orderBy: PositionLiquidated_orderBy, $orderDirection: OrderDirection, $where: PositionLiquidated_filter, $block: Block_height) {
  positionLiquidateds(
    skip: $skip
    first: $first
    orderBy: $orderBy
    orderDirection: $orderDirection
    where: $where
    block: $block
  ) {
    ...SubgraphPositionLiquidated
  }
}
    ${SubgraphPositionLiquidatedFragmentDoc}`;
export const TraderDocument = gql`
    query Trader($id: ID!, $block: Block_height) {
  trader(id: $id, block: $block) {
    ...SubgraphTrader
  }
}
    ${SubgraphTraderFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Maker(variables: MakerQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakerQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakerQuery>(MakerDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Maker');
    },
    Makers(variables?: MakersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakersQuery>(MakersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Makers');
    },
    Market(variables: MarketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketQuery>(MarketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Market');
    },
    Markets(variables?: MarketsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MarketsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MarketsQuery>(MarketsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Markets');
    },
    OpenOrder(variables: OpenOrderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OpenOrderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OpenOrderQuery>(OpenOrderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OpenOrder');
    },
    OpenOrders(variables?: OpenOrdersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<OpenOrdersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<OpenOrdersQuery>(OpenOrdersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'OpenOrders');
    },
    Position(variables: PositionQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PositionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PositionQuery>(PositionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Position');
    },
    Positions(variables?: PositionsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PositionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PositionsQuery>(PositionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Positions');
    },
    PositionLiquidated(variables: PositionLiquidatedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PositionLiquidatedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PositionLiquidatedQuery>(PositionLiquidatedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PositionLiquidated');
    },
    PositionLiquidateds(variables?: PositionLiquidatedsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PositionLiquidatedsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<PositionLiquidatedsQuery>(PositionLiquidatedsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'PositionLiquidateds');
    },
    Trader(variables: TraderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<TraderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TraderQuery>(TraderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Trader');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;