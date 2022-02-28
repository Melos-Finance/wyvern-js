/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '../types';
import BN from 'bn.js';
import { BaseContract } from './base_contract';
import { Contract } from "web3-eth-contract";
export declare class WyvernAtomicizerContract extends BaseContract {
    atomicize: {
        sendTransactionAsync(addrs_0: string[], values_1: BN[], calldataLengths_2: BN[], calldatas_3: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], values_1: BN[], calldataLengths_2: BN[], calldatas_3: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], values_1: BN[], calldataLengths_2: BN[], calldatas_3: string): string;
    };
    constructor(contract: Contract, defaults: Partial<TxData>);
}
