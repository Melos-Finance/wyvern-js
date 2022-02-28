import BN from "bn.js";

import {
  provider,
  TransactionReceipt,
  Log,
  TransactionConfig,
} from "web3-core";
import { AbiType, StateMutabilityType } from "web3-utils";

import { ContractAbi, DecodedLogEntry, SolidityTypes } from "ethereum-types";

export {
  AbiType,
  ContractAbi,
  StateMutabilityType,
  TransactionReceipt,
  SolidityTypes,
};

export interface WyvernProtocolConfig {
  network: Network;
  gasPrice?: number | string | BN;
  wyvernExchangeContractAddress?: string;
  wyvernProxyRegistryContractAddress?: string;
  wyvernDAOContractAddress?: string;
  wyvernTokenContractAddress?: string;
  wyvernAtomicizerContractAddress?: string;
}

export type AsyncMethod = (...args: any[]) => Promise<any>;
export type SyncMethod = (...args: any[]) => any;

export enum Network {
  Main = "main",
  Rinkeby = "rinkeby",
  BSC = "bsc_mainnet",
  BSCTestnet = "bsc_testnet",
}

export enum SaleKind {
  FixedPrice = 0,
  EnglishAuction = 1,
  DutchAuction = 2,
}

export enum HowToCall {
  Call = 0,
  DelegateCall = 1,
  StaticCall = 2,
  Create = 3,
}

export enum WyvernProtocolError {
  InvalidSignature = "INVALID_SIGNATURE",
  TransactionMiningTimeout = "TRANSACTION_MINING_TIMEOUT",
  InvalidJump = "INVALID_JUMP",
  OutOfGas = "OUT_OF_GAS",
}

export interface ECSignature {
  v: number;
  r: string;
  s: string;
}

export type LogEvent = Log;
export type RawLog = Log;

export interface DecodedLogEvent<ArgsType> extends LogEvent {
  isRemoved: boolean;
  log: LogWithDecodedArgs<ArgsType>;
}

export type ContractEventArg = string | BN;

export interface DecodedLogArgs {
  [argName: string]: ContractEventArg;
}

export interface LogWithDecodedArgs<ArgsType>
  extends DecodedLogEntry<ArgsType> {}

export interface Order {
  exchange: string;
  maker: string;
  taker: string;
  makerRelayerFee: BN;
  takerRelayerFee: BN;
  makerProtocolFee: BN;
  takerProtocolFee: BN;
  feeRecipient: string;
  feeMethod: number;
  side: number;
  saleKind: number;
  target: string;
  howToCall: number;
  calldata: string;
  replacementPattern: string;
  staticTarget: string;
  staticExtradata: string;
  paymentToken: string;
  basePrice: BN;
  extra: BN;
  listingTime: BN;
  expirationTime: BN;
  salt: BN;
}

export interface SignedOrder extends Order {
  ecSignature: ECSignature;
}

export enum FunctionInputKind {
  Replaceable = "replaceable",
  Asset = "asset",
  Owner = "owner",
  Index = "index",
  Count = "count",
  Data = "data",
}

export interface AnnotatedFunctionInput {
  name: string;
  type: string;
  kind: FunctionInputKind;
  value?: any;
}

export enum FunctionOutputKind {
  Owner = "owner",
  Asset = "asset",
  Count = "count",
  Other = "other",
}

export interface AnnotatedFunctionOutput {
  name: string;
  type: string;
  kind: FunctionOutputKind;
}

export enum EventInputKind {
  Source = "source",
  Destination = "destination",
  Asset = "asset",
  Other = "other",
}

export interface AnnotatedEventInput {
  name: string;
  type: string;
  indexed: boolean;
  kind: EventInputKind;
}

export interface AnnotatedFunctionABI {
  type: AbiType;
  name: string;
  target: string;
  inputs: AnnotatedFunctionInput[];
  outputs: AnnotatedFunctionOutput[];
  constant: boolean;
  stateMutability: StateMutabilityType;
  payable: boolean;
}

export interface AnnotatedEventABI<T> {
  type: AbiType;
  name: string;
  target: string;
  anonymous: boolean;
  inputs: AnnotatedEventInput[];
  assetFromInputs: (inputs: any, web3: any) => Promise<T>;
}

export type ReplacementEncoder = (
  abi: AnnotatedFunctionABI,
  kind?: FunctionInputKind,
  encodeToBytes?: boolean
) => string;
export type AtomicizedReplacementEncoder = (
  abis: AnnotatedFunctionABI[],
  kind?: FunctionInputKind
) => string;

export type Web3Provider = provider;

export type TxData = TransactionConfig;
export type CallData = TransactionConfig;

export interface Token {
  name: string;
  symbol: string;
  decimals: number;
  address: string;
}

export interface NetworkTokens {
  canonicalWrappedEther: Token;
  otherTokens: Token[];
}

export interface AnnotatedFunctionABIReturning<T> extends AnnotatedFunctionABI {
  assetFromOutputs: (outputs: any) => T;
}

export interface SchemaFunctions<T> {
  transfer: (asset: T) => AnnotatedFunctionABI;
  ownerOf?: (asset: T) => AnnotatedFunctionABI;
  countOf?: (asset: T) => AnnotatedFunctionABIReturning<number>;
  assetsOfOwnerByIndex: Array<AnnotatedFunctionABIReturning<T | null>>;
  initializeProxy?: (owner: string) => AnnotatedFunctionABI;
}

export interface SchemaEvents<T> {
  transfer: Array<AnnotatedEventABI<T>>;
}

export interface Property {
  key: string;
  kind: string;
  value: any;
}

export interface FormatInfo {
  thumbnail: string;
  title: string;
  description: string;
  url: string;
  properties: Property[];
}

export interface SchemaField {
  name: string;
  type: string;
  description: string;
  values?: any[];
  readOnly?: boolean;
}

export interface Schema<T> {
  version: number;
  deploymentBlock: number;
  name: string;
  description: string;
  thumbnail: string;
  website: string;
  fields: SchemaField[];
  checkAsset?: (asset: T) => boolean;
  assetFromFields: (fields: any) => T;
  assetToFields?: (asset: T) => any;
  allAssets?: (web3: any) => Promise<T[]>;
  functions: SchemaFunctions<T>;
  events: SchemaEvents<T>;
  formatter: (obj: T, web3: any) => Promise<FormatInfo>;
  hash: (obj: T) => any;
}
