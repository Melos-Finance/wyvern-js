"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeDefaultCall = exports.encodeBuy = exports.encodeAtomicizedBuy = exports.encodeAtomicizedSell = exports.encodeSell = exports.encodeCall = exports.encodeReplacementPattern = void 0;
var ethABI = __importStar(require("@melosstudio/ethereumjs-abi"));
var wyvernProtocol_1 = require("./wyvernProtocol");
var types_1 = require("./types");
var bn_js_1 = __importDefault(require("bn.js"));
var failWith = function (msg) {
    throw new Error(msg);
};
exports.encodeReplacementPattern = wyvernProtocol_1.WyvernProtocol.encodeReplacementPattern;
var encodeCall = function (abi, parameters) {
    var inputTypes = abi.inputs.map(function (i) { return i.type; });
    return ("0x" +
        Buffer.concat([
            ethABI.methodID(abi.name, inputTypes),
            ethABI.rawEncode(inputTypes, parameters),
        ]).toString("hex"));
};
exports.encodeCall = encodeCall;
var encodeSell = function (schema, asset, address) {
    var transfer = schema.functions.transfer(asset);
    return {
        target: transfer.target,
        calldata: (0, exports.encodeDefaultCall)(transfer, address),
        replacementPattern: (0, exports.encodeReplacementPattern)(transfer),
    };
};
exports.encodeSell = encodeSell;
var encodeAtomicizedSell = function (schema, assets, address, atomicizer) {
    var transactions = assets.map(function (asset) {
        var _a = (0, exports.encodeSell)(schema, asset, address), target = _a.target, calldata = _a.calldata;
        return {
            calldata: calldata,
            abi: schema.functions.transfer(asset),
            address: target,
            value: new bn_js_1.default(0),
        };
    });
    var atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(function (t) { return t.address; }), transactions.map(function (t) { return t.value; }), transactions.map(function (t) { return new bn_js_1.default((t.calldata.length - 2) / 2); }), // subtract 2 for '0x', divide by 2 for hex
    transactions.map(function (t) { return t.calldata; }).reduce(function (x, y) { return x + y.slice(2); }) // cut off the '0x'
    );
    var atomicizedReplacementPattern = wyvernProtocol_1.WyvernProtocol.encodeAtomicizedReplacementPattern(transactions.map(function (t) { return t.abi; }));
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
    };
};
exports.encodeAtomicizedSell = encodeAtomicizedSell;
var encodeAtomicizedBuy = function (schema, assets, address, atomicizer) {
    var transactions = assets.map(function (asset) {
        var _a = (0, exports.encodeBuy)(schema, asset, address), target = _a.target, calldata = _a.calldata;
        return {
            calldata: calldata,
            abi: schema.functions.transfer(asset),
            address: target,
            value: new bn_js_1.default(0),
        };
    });
    var atomicizedCalldata = atomicizer.atomicize.getABIEncodedTransactionData(transactions.map(function (t) { return t.address; }), transactions.map(function (t) { return t.value; }), transactions.map(function (t) { return new bn_js_1.default((t.calldata.length - 2) / 2); }), // subtract 2 for '0x', divide by 2 for hex
    transactions.map(function (t) { return t.calldata; }).reduce(function (x, y) { return x + y.slice(2); }) // cut off the '0x'
    );
    var atomicizedReplacementPattern = wyvernProtocol_1.WyvernProtocol.encodeAtomicizedReplacementPattern(transactions.map(function (t) { return t.abi; }), types_1.FunctionInputKind.Owner);
    return {
        calldata: atomicizedCalldata,
        replacementPattern: atomicizedReplacementPattern,
    };
};
exports.encodeAtomicizedBuy = encodeAtomicizedBuy;
var encodeBuy = function (schema, asset, address) {
    var transfer = schema.functions.transfer(asset);
    var replaceables = transfer.inputs.filter(function (i) { return i.kind === types_1.FunctionInputKind.Replaceable; });
    var ownerInputs = transfer.inputs.filter(function (i) { return i.kind === types_1.FunctionInputKind.Owner; });
    // Validate
    if (replaceables.length !== 1) {
        failWith("Only 1 input can match transfer destination, but instead " +
            replaceables.length +
            " did");
    }
    // Compute calldata
    var parameters = transfer.inputs.map(function (input) {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return address;
            case types_1.FunctionInputKind.Owner:
                return wyvernProtocol_1.WyvernProtocol.generateDefaultValue(input.type);
            default:
                return input.value.toString();
        }
    });
    var calldata = (0, exports.encodeCall)(transfer, parameters);
    // Compute replacement pattern
    var replacementPattern = "0x";
    if (ownerInputs.length > 0) {
        replacementPattern = (0, exports.encodeReplacementPattern)(transfer, types_1.FunctionInputKind.Owner);
    }
    return {
        target: transfer.target,
        calldata: calldata,
        replacementPattern: replacementPattern,
    };
};
exports.encodeBuy = encodeBuy;
var encodeDefaultCall = function (abi, address) {
    var parameters = abi.inputs.map(function (input) {
        switch (input.kind) {
            case types_1.FunctionInputKind.Replaceable:
                return wyvernProtocol_1.WyvernProtocol.generateDefaultValue(input.type);
            case types_1.FunctionInputKind.Owner:
                return address;
            case types_1.FunctionInputKind.Asset:
            default:
                return input.value;
        }
    });
    return (0, exports.encodeCall)(abi, parameters);
};
exports.encodeDefaultCall = encodeDefaultCall;
//# sourceMappingURL=schemaFunctions.js.map