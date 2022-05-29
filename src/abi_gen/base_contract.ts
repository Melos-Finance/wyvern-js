import { TxData } from "../types";
import * as _ from "lodash";
import { Contract } from "web3-eth-contract";

export class BaseContract {
  protected contract: Contract;
  protected defaults: Partial<TxData>;

  protected async applyDefaultsToTxDataAsync<T extends Partial<TxData>>(
    txData: T,
    estimateGasAsync?: (txData: T) => Promise<number>
  ): Promise<Partial<TxData>> {
    // Gas amount sourced with the following priorities:
    // 1. Optional param passed in to public method call
    // 2. Global config passed in at library instantiation
    // 3. Gas estimate calculation + safety margin
    const removeUndefinedProperties = _.pickBy;
    const txDataWithDefaults = {
      ...removeUndefinedProperties(this.defaults),
      ...removeUndefinedProperties(txData as any),
      // HACK: TS can't prove that T is spreadable.
      // Awaiting https://github.com/Microsoft/TypeScript/pull/13288 to be merged
    };
    if (
      _.isUndefined(txDataWithDefaults.gas) &&
      !_.isUndefined(estimateGasAsync)
    ) {
      const estimatedGas = await estimateGasAsync(txData);
      txDataWithDefaults.gas = estimatedGas;
    }
    return txDataWithDefaults;
  }

  constructor(contract: Contract, defaults: Partial<TxData>) {
    this.contract = contract;
    this.defaults = defaults;
  }
}
