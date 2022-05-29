import { TxData } from "../types";
import { Contract } from "web3-eth-contract";
export declare class BaseContract {
    protected contract: Contract;
    protected defaults: Partial<TxData>;
    protected applyDefaultsToTxDataAsync<T extends Partial<TxData>>(txData: T, estimateGasAsync?: (txData: T) => Promise<number>): Promise<Partial<TxData>>;
    constructor(contract: Contract, defaults: Partial<TxData>);
}
