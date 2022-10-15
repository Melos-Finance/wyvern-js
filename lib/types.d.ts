import BigNumber from "bignumber.js";
import { provider, TransactionReceipt, Log, TransactionConfig } from "web3-core";
import { AbiType, StateMutabilityType } from "web3-utils";
import { ContractAbi, DecodedLogEntry, SolidityTypes } from "ethereum-types";
export { AbiType, ContractAbi, StateMutabilityType, TransactionReceipt, SolidityTypes, };
export interface WyvernProtocolConfig {
    network: Network;
    gasPrice?: number | string | BigNumber;
    wyvernExchangeContractAddress?: string;
    wyvernProxyRegistryContractAddress?: string;
    wyvernAtomicizerContractAddress?: string;
}
export declare type AsyncMethod = (...args: any[]) => Promise<any>;
export declare type SyncMethod = (...args: any[]) => any;
export declare enum Network {
    Main = "main",
    Rinkeby = "rinkeby",
    Goerli = "goerli",
    BSC = "bsc_mainnet",
    BSCTestnet = "bsc_testnet",
    Polygon = "polygon",
    Mumbai = "mumbai"
}
export declare enum SaleKind {
    FixedPrice = 0,
    EnglishAuction = 1,
    DutchAuction = 2
}
export declare enum HowToCall {
    Call = 0,
    DelegateCall = 1,
    StaticCall = 2,
    Create = 3
}
export declare enum WyvernProtocolError {
    InvalidSignature = "INVALID_SIGNATURE",
    TransactionMiningTimeout = "TRANSACTION_MINING_TIMEOUT",
    InvalidJump = "INVALID_JUMP",
    OutOfGas = "OUT_OF_GAS"
}
export interface ECSignature {
    v: number;
    r: string;
    s: string;
}
export declare type LogEvent = Log;
export declare type RawLog = Log;
export interface DecodedLogEvent<ArgsType> extends LogEvent {
    isRemoved: boolean;
    log: LogWithDecodedArgs<ArgsType>;
}
export declare type ContractEventArg = string | BigNumber;
export interface DecodedLogArgs {
    [argName: string]: ContractEventArg;
}
export interface LogWithDecodedArgs<ArgsType> extends DecodedLogEntry<ArgsType> {
}
export interface Order {
    exchange: string;
    maker: string;
    taker: string;
    makerRelayerFee: BigNumber;
    takerRelayerFee: BigNumber;
    makerProtocolFee: BigNumber;
    takerProtocolFee: BigNumber;
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
    basePrice: BigNumber;
    extra: BigNumber;
    listingTime: BigNumber;
    expirationTime: BigNumber;
    salt: BigNumber;
}
export interface SignedOrder extends Order {
    ecSignature: ECSignature;
}
export declare enum FunctionInputKind {
    Replaceable = "replaceable",
    Asset = "asset",
    Owner = "owner",
    Index = "index",
    Count = "count",
    Data = "data"
}
export interface AnnotatedFunctionInput {
    name: string;
    type: string;
    kind: FunctionInputKind;
    value?: any;
}
export declare enum FunctionOutputKind {
    Owner = "owner",
    Asset = "asset",
    Count = "count",
    Other = "other"
}
export interface AnnotatedFunctionOutput {
    name: string;
    type: string;
    kind: FunctionOutputKind;
}
export declare enum EventInputKind {
    Source = "source",
    Destination = "destination",
    Asset = "asset",
    Other = "other"
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
export declare type ReplacementEncoder = (abi: AnnotatedFunctionABI, kind?: FunctionInputKind, encodeToBytes?: boolean) => string;
export declare type AtomicizedReplacementEncoder = (abis: AnnotatedFunctionABI[], kind?: FunctionInputKind) => string;
export declare type Web3Provider = provider;
export declare type TxData = TransactionConfig;
export declare type CallData = TransactionConfig;
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
