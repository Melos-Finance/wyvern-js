import * as Web3 from "web3";
import { DecodedLogArgs, LogWithDecodedArgs, RawLog } from "../types";
export declare class AbiDecoder {
    private _savedABIs;
    private _methodIds;
    private static _padZeros;
    constructor(abiArrays: Web3.AbiDefinition[][]);
    tryToDecodeLogOrNoop(log: Web3.LogEntry): LogWithDecodedArgs<DecodedLogArgs> | RawLog;
    private _addABI;
}
