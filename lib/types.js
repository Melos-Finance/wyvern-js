"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventInputKind = exports.FunctionOutputKind = exports.FunctionInputKind = exports.WyvernProtocolError = exports.HowToCall = exports.SaleKind = exports.Network = exports.SolidityTypes = void 0;
var ethereum_types_1 = require("ethereum-types");
Object.defineProperty(exports, "SolidityTypes", { enumerable: true, get: function () { return ethereum_types_1.SolidityTypes; } });
var Network;
(function (Network) {
    Network["Main"] = "main";
    Network["Rinkeby"] = "rinkeby";
    Network["Goerli"] = "goerli";
    Network["BSC"] = "bsc_mainnet";
    Network["BSCTestnet"] = "bsc_testnet";
    Network["Polygon"] = "polygon";
    Network["Mumbai"] = "mumbai";
})(Network = exports.Network || (exports.Network = {}));
var SaleKind;
(function (SaleKind) {
    SaleKind[SaleKind["FixedPrice"] = 0] = "FixedPrice";
    SaleKind[SaleKind["EnglishAuction"] = 1] = "EnglishAuction";
    SaleKind[SaleKind["DutchAuction"] = 2] = "DutchAuction";
})(SaleKind = exports.SaleKind || (exports.SaleKind = {}));
var HowToCall;
(function (HowToCall) {
    HowToCall[HowToCall["Call"] = 0] = "Call";
    HowToCall[HowToCall["DelegateCall"] = 1] = "DelegateCall";
    HowToCall[HowToCall["StaticCall"] = 2] = "StaticCall";
    HowToCall[HowToCall["Create"] = 3] = "Create";
})(HowToCall = exports.HowToCall || (exports.HowToCall = {}));
var WyvernProtocolError;
(function (WyvernProtocolError) {
    WyvernProtocolError["InvalidSignature"] = "INVALID_SIGNATURE";
    WyvernProtocolError["TransactionMiningTimeout"] = "TRANSACTION_MINING_TIMEOUT";
    WyvernProtocolError["InvalidJump"] = "INVALID_JUMP";
    WyvernProtocolError["OutOfGas"] = "OUT_OF_GAS";
})(WyvernProtocolError = exports.WyvernProtocolError || (exports.WyvernProtocolError = {}));
var FunctionInputKind;
(function (FunctionInputKind) {
    FunctionInputKind["Replaceable"] = "replaceable";
    FunctionInputKind["Asset"] = "asset";
    FunctionInputKind["Owner"] = "owner";
    FunctionInputKind["Index"] = "index";
    FunctionInputKind["Count"] = "count";
    FunctionInputKind["Data"] = "data";
})(FunctionInputKind = exports.FunctionInputKind || (exports.FunctionInputKind = {}));
var FunctionOutputKind;
(function (FunctionOutputKind) {
    FunctionOutputKind["Owner"] = "owner";
    FunctionOutputKind["Asset"] = "asset";
    FunctionOutputKind["Count"] = "count";
    FunctionOutputKind["Other"] = "other";
})(FunctionOutputKind = exports.FunctionOutputKind || (exports.FunctionOutputKind = {}));
var EventInputKind;
(function (EventInputKind) {
    EventInputKind["Source"] = "source";
    EventInputKind["Destination"] = "destination";
    EventInputKind["Asset"] = "asset";
    EventInputKind["Other"] = "other";
})(EventInputKind = exports.EventInputKind || (exports.EventInputKind = {}));
//# sourceMappingURL=types.js.map