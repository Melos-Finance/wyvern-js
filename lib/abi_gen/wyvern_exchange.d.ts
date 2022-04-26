/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import { TxData } from '../types';
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
        sendTransactionAsync(newMinimumMakerProtocolFee_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newMinimumMakerProtocolFee_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newMinimumMakerProtocolFee_0: string): string;
    };
    changeMinimumTakerProtocolFee: {
        sendTransactionAsync(newMinimumTakerProtocolFee_0: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(newMinimumTakerProtocolFee_0: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(newMinimumTakerProtocolFee_0: string): string;
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
        callAsync(txData?: Partial<TxData>): Promise<string>;
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
        callAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
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
        callAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    calculateFinalPrice: {
        callAsync(side_0: number, saleKind_1: number, basePrice_2: string, extra_3: string, listingTime_4: string, expirationTime_5: string, txData?: Partial<TxData>): Promise<string>;
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
        callAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    ordersCanMatch_: {
        callAsync(addrs_0: string[], uints_1: string[], feeMethodsSidesKindsHowToCalls_2: number[], calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    approveOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, orderbookInclusionDesired_9: boolean): string;
    };
    registry: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    minimumMakerProtocolFee: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    hashToSign_: {
        callAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<string>;
    };
    cancelledOrFinalized: {
        callAsync(index_0_0: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    exchangeToken: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    cancelOrder_: {
        sendTransactionAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number, r_10: string, s_11: string, txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, v_9: number, r_10: string, s_11: string): string;
    };
    atomicMatch_: {
        sendTransactionAsync(addrs_0: string[], uints_1: string[], feeMethodsSidesKindsHowToCalls_2: number[], calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: number[], rssMetadata_10: string[], txData?: Partial<TxData>): Promise<string>;
        estimateGasAsync(addrs_0: string[], uints_1: string[], feeMethodsSidesKindsHowToCalls_2: number[], calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: number[], rssMetadata_10: string[], txData?: Partial<TxData>): Promise<number>;
        getABIEncodedTransactionData(addrs_0: string[], uints_1: string[], feeMethodsSidesKindsHowToCalls_2: number[], calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, vs_9: number[], rssMetadata_10: string[]): string;
    };
    validateOrderParameters_: {
        callAsync(addrs_0: string[], uints_1: string[], feeMethod_2: number, side_3: number, saleKind_4: number, howToCall_5: number, calldata_6: string, replacementPattern_7: string, staticExtradata_8: string, txData?: Partial<TxData>): Promise<boolean>;
    };
    INVERSE_BASIS_POINT: {
        callAsync(txData?: Partial<TxData>): Promise<string>;
    };
    calculateMatchPrice_: {
        callAsync(addrs_0: string[], uints_1: string[], feeMethodsSidesKindsHowToCalls_2: number[], calldataBuy_3: string, calldataSell_4: string, replacementPatternBuy_5: string, replacementPatternSell_6: string, staticExtradataBuy_7: string, staticExtradataSell_8: string, txData?: Partial<TxData>): Promise<string>;
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
