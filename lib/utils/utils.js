"use strict";
/* Sourced from 0x.js */
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
exports.utils = void 0;
var bignumber_js_1 = __importDefault(require("bignumber.js"));
var bn_js_1 = __importDefault(require("bn.js"));
var ethABI = __importStar(require("@melosstudio/ethereumjs-abi"));
var ethUtil = __importStar(require("ethereumjs-util"));
var _ = __importStar(require("lodash"));
var types_1 = require("../types");
exports.utils = {
    /**
     * Converts BigNumber instance to BN
     * The only reason we convert to BN is to remain compatible with `ethABI. soliditySHA3` that
     * expects values of Solidity type `uint` to be passed as type `BN`.
     * We do not use BN anywhere else in the codebase.
     */
    bigNumberToBN: function (value) {
        return new bn_js_1.default(value.toString(10), 10);
    },
    consoleLog: function (message) {
        // tslint:disable-next-line: no-console
        console.log(message);
    },
    isParityNode: function (nodeVersion) {
        return _.includes(nodeVersion, "Parity");
    },
    isTestRpc: function (nodeVersion) {
        return _.includes(nodeVersion, "TestRPC");
    },
    spawnSwitchErr: function (name, value) {
        return new Error("Unexpected switch value: " + value + " encountered for " + name);
    },
    getAssetHashHex: function (assetHash, schema) {
        var concat = schema + ":" + assetHash;
        var hashBuf = ethABI.soliditySHA3(["string"], [concat]);
        return ethUtil.bufferToHex(hashBuf);
    },
    getOrderHashHex: function (order) {
        var orderParts = [
            { value: order.exchange, type: types_1.SolidityTypes.Address },
            { value: order.maker, type: types_1.SolidityTypes.Address },
            { value: order.taker, type: types_1.SolidityTypes.Address },
            {
                value: exports.utils.bigNumberToBN(order.makerRelayerFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.takerRelayerFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.makerProtocolFee),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.takerProtocolFee),
                type: types_1.SolidityTypes.Uint256,
            },
            { value: order.feeRecipient, type: types_1.SolidityTypes.Address },
            { value: order.feeMethod, type: types_1.SolidityTypes.Uint8 },
            { value: order.side, type: types_1.SolidityTypes.Uint8 },
            { value: order.saleKind, type: types_1.SolidityTypes.Uint8 },
            { value: order.target, type: types_1.SolidityTypes.Address },
            { value: order.howToCall, type: types_1.SolidityTypes.Uint8 },
            {
                value: new Buffer(order.calldata.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            {
                value: new Buffer(order.replacementPattern.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            { value: order.staticTarget, type: types_1.SolidityTypes.Address },
            {
                value: new Buffer(order.staticExtradata.slice(2), "hex"),
                type: types_1.SolidityTypes.Bytes,
            },
            { value: order.paymentToken, type: types_1.SolidityTypes.Address },
            {
                value: exports.utils.bigNumberToBN(order.basePrice),
                type: types_1.SolidityTypes.Uint256,
            },
            { value: exports.utils.bigNumberToBN(order.extra), type: types_1.SolidityTypes.Uint256 },
            {
                value: exports.utils.bigNumberToBN(order.listingTime),
                type: types_1.SolidityTypes.Uint256,
            },
            {
                value: exports.utils.bigNumberToBN(order.expirationTime),
                type: types_1.SolidityTypes.Uint256,
            },
            { value: exports.utils.bigNumberToBN(order.salt), type: types_1.SolidityTypes.Uint256 },
        ];
        var types = _.map(orderParts, function (o) { return o.type; });
        var values = _.map(orderParts, function (o) { return o.value; });
        var hash = ethABI.soliditySHA3(types, values);
        return ethUtil.bufferToHex(hash);
    },
    getCurrentUnixTimestampSec: function () {
        return new bignumber_js_1.default(Date.now() / 1000).integerValue();
    },
    getCurrentUnixTimestampMs: function () {
        return new bignumber_js_1.default(Date.now());
    },
};
//# sourceMappingURL=utils.js.map