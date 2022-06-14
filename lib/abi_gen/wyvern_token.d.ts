/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '@0xproject/types';
import { BigNumber } from '@0xproject/utils';
import * as Web3 from 'web3';
import { BaseContract } from './base_contract';
export declare class WyvernTokenContract extends BaseContract {
    MULTIPLIER: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    name: {
        callAsync(txData?: TxData): Promise<string>;
    };
    maximumRedeemable: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    approve: {
        sendTransactionAsync(spender_0: string, amount_1: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(spender_0: string, amount_1: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(spender_0: string, amount_1: BigNumber): string;
    };
    totalSupply: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    multiplier: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    transferFrom: {
        sendTransactionAsync(sender_0: string, recipient_1: string, amount_2: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(sender_0: string, recipient_1: string, amount_2: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(sender_0: string, recipient_1: string, amount_2: BigNumber): string;
    };
    decimals: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    increaseAllowance: {
        sendTransactionAsync(spender_0: string, addedValue_1: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(spender_0: string, addedValue_1: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(spender_0: string, addedValue_1: BigNumber): string;
    };
    burn: {
        sendTransactionAsync(amount_0: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(amount_0: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(amount_0: BigNumber): string;
    };
    pubKeyToEthereumAddress: {
        callAsync(pubKey_0: string, txData?: TxData): Promise<string>;
    };
    balanceOf: {
        callAsync(account_0: string, txData?: TxData): Promise<BigNumber>;
    };
    redeemUTXO: {
        sendTransactionAsync(txid_0: string, outputIndex_1: number | BigNumber, satoshis_2: BigNumber, proof_3: string[], pubKey_4: string, isCompressed_5: boolean, v_6: number | BigNumber, r_7: string, s_8: string, txData?: TxData): Promise<string>;
        estimateGasAsync(txid_0: string, outputIndex_1: number | BigNumber, satoshis_2: BigNumber, proof_3: string[], pubKey_4: string, isCompressed_5: boolean, v_6: number | BigNumber, r_7: string, s_8: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(txid_0: string, outputIndex_1: number | BigNumber, satoshis_2: BigNumber, proof_3: string[], pubKey_4: string, isCompressed_5: boolean, v_6: number | BigNumber, r_7: string, s_8: string): string;
    };
    burnFrom: {
        sendTransactionAsync(account_0: string, amount_1: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(account_0: string, amount_1: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(account_0: string, amount_1: BigNumber): string;
    };
    canRedeemUTXOHash: {
        callAsync(merkleLeafHash_0: string, proof_1: string[], txData?: TxData): Promise<boolean>;
    };
    releaseTokens: {
        sendTransactionAsync(destination_0: string, txData?: TxData): Promise<string>;
        estimateGasAsync(destination_0: string, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(destination_0: string): string;
    };
    symbol: {
        callAsync(txData?: TxData): Promise<string>;
    };
    decreaseAllowance: {
        sendTransactionAsync(spender_0: string, subtractedValue_1: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(spender_0: string, subtractedValue_1: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(spender_0: string, subtractedValue_1: BigNumber): string;
    };
    transfer: {
        sendTransactionAsync(recipient_0: string, amount_1: BigNumber, txData?: TxData): Promise<string>;
        estimateGasAsync(recipient_0: string, amount_1: BigNumber, txData?: TxData): Promise<number>;
        getABIEncodedTransactionData(recipient_0: string, amount_1: BigNumber): string;
    };
    validateSignature: {
        callAsync(hash_0: string, v_1: number | BigNumber, r_2: string, s_3: string, expected_4: string, txData?: TxData): Promise<boolean>;
    };
    verifyProof: {
        callAsync(proof_0: string[], merkleLeafHash_1: string, txData?: TxData): Promise<boolean>;
    };
    canRedeemUTXO: {
        callAsync(txid_0: string, originalAddress_1: string, outputIndex_2: number | BigNumber, satoshis_3: BigNumber, proof_4: string[], txData?: TxData): Promise<boolean>;
    };
    ecdsaVerify: {
        callAsync(addr_0: string, pubKey_1: string, v_2: number | BigNumber, r_3: string, s_4: string, txData?: TxData): Promise<boolean>;
    };
    allowance: {
        callAsync(owner_0: string, spender_1: string, txData?: TxData): Promise<BigNumber>;
    };
    pubKeyToBitcoinAddress: {
        callAsync(pubKey_0: string, isCompressed_1: boolean, txData?: TxData): Promise<string>;
    };
    rootUTXOMerkleTreeHash: {
        callAsync(txData?: TxData): Promise<string>;
    };
    totalRedeemed: {
        callAsync(txData?: TxData): Promise<BigNumber>;
    };
    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>);
}
