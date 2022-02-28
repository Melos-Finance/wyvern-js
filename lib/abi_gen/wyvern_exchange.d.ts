/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '../types';
import BN from 'bn.js';
import { BaseContract } from './base_contract';
import { Contract } from "web3-eth-contract";
export declare class WyvernExchangeContract extends BaseContract {
    name: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    auctionBroker: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    tokenTransferProxy: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    staticCall: {
        callAsync(target_0: string, calldata_1: string, extradata_2: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    changeMinimumMakerProtocolFee: {
        sendTransactionAsync(newMinimumMakerProtocolFee_0: BN, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newMinimumMakerProtocolFee_0: BN, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newMinimumMakerProtocolFee_0: BN): string;
    };
    changeMinimumTakerProtocolFee: {
        sendTransactionAsync(newMinimumTakerProtocolFee_0: BN, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newMinimumTakerProtocolFee_0: BN, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newMinimumTakerProtocolFee_0: BN): string;
    };
    guardedArrayReplace: {
        callAsync(array_0: string, desired_1: string, mask_2: string, txData?: Partial<TxData>): Promise<string>;
    };
    chageAuctionBroker: {
        sendTransactionAsync(newAuctionBroker_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newAuctionBroker_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newAuctionBroker_0: string): string;
    };
    minimumTakerProtocolFee: {
        callAsync(txData?: Partial<TxData>): Promise<BN>;
    };
    codename: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    testCopyAddress: {
        callAsync(addr_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    testCopy: {
        callAsync(arrToCopy_0: string, txData?: Partial<TxData>): Promise<string>;
    };
    calculateCurrentPrice_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<BN>;
    };
    changeProtocolFeeRecipient: {
        sendTransactionAsync(newProtocolFeeRecipient_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newProtocolFeeRecipient_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newProtocolFeeRecipient_0: string): string;
    };
    version: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    orderCalldataCanMatch: {
        callAsync(buyCalldata_0: string, buyReplacementPattern_1: string, sellCalldata_2: string, sellReplacementPattern_3: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    validateOrder_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BN, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    calculateFinalPrice: {
        callAsync(side_0: number | BN, saleKind_1: number | BN, basePrice_2: BN, extra_3: BN, listingTime_4: BN, expirationTime_5: BN, txData?: Partial<TxData>): Promise<BN>;
    };
    protocolFeeRecipient: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    renounceOwnership: {
        sendTransactionAsync(txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(): string;
    };
    hashOrder_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    ordersCanMatch_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethodsSidesKindsHowToCalls_2: Array<number | BN>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    approveOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean): string;
    };
    registry: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    minimumMakerProtocolFee: {
        callAsync(txData?: Partial<TxData>): Promise<BN>;
    };
    hashToSign_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    cancelledOrFinalized: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    exchangeToken: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    cancelOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BN, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BN, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number | BN, r_10: string, s_11: string): string;
    };
    atomicMatch_: {
        sendTransactionAsync(addrs_0: string[], uints_1: BN[], feeMethodsSidesKindsHowToCalls_2: Array<number | BN>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: Array<number | BN>, rssMetadata_10: string[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: BN[], feeMethodsSidesKindsHowToCalls_2: Array<number | BN>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: Array<number | BN>, rssMetadata_10: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: BN[], feeMethodsSidesKindsHowToCalls_2: Array<number | BN>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: Array<number | BN>, rssMetadata_10: string[]): string;
    };
    validateOrderParameters_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethod_2: number | BN, side_3: number | BN, saleKind_4: number | BN, howToCall_5: number | BN, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    INVERSE_BASIS_POINT: {
        callAsync(txData?: Partial<TxData>): Promise<BN>;
    };
    calculateMatchPrice_: {
        callAsync(addrs_0: string[], uints_1: BN[], feeMethodsSidesKindsHowToCalls_2: Array<number | BN>, calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<BN>;
    };
    approvedOrders: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    transferOwnership: {
        sendTransactionAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newOwner_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newOwner_0: string): string;
    };
    constructor(contract: Contract, defaults: Partial<TxData>);
}
