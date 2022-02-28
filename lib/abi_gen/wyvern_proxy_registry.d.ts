/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '../types';
import BN from 'bn.js';
import { BaseContract } from './base_contract';
import { Contract } from "web3-eth-contract";
export declare class WyvernProxyRegistryContract extends BaseContract {
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    initialAddressSet: {
        callAsync(txData?: Partial<TxData>): Promise<boolean>;
    };
    endGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    revokeAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    pending: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<BN>;
    };
    contracts: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    delegateProxyImplementation: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    proxies: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    startGrantAuthentication: {
        sendTransactionAsync(addr_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addr_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addr_0: string): string;
    };
    registerProxy: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    DELAY_PERIOD: {
        callAsync(txData?: Partial<TxData>): Promise<BN>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    grantInitialAuthentication: {
        sendTransactionAsync(authAddress_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(authAddress_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(authAddress_0: string): string;
    };
    constructor(contract: Contract, defaults: Partial<TxData>);
}
