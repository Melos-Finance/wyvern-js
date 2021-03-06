"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WyvernExchangeContract = void 0;
var base_contract_1 = require("./base_contract");
var utils_1 = require("@0x/utils");
var WyvernExchangeContract = /** @class */ (function (_super) {
    __extends(WyvernExchangeContract, _super);
    function WyvernExchangeContract(contract, defaults) {
        var _this = _super.call(this, contract, defaults) || this;
        _this.name = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.name().call(txData)];
                    });
                });
            },
        };
        _this.auctionBroker = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.auctionBroker().call(txData)];
                    });
                });
            },
        };
        _this.tokenTransferProxy = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.tokenTransferProxy().call(txData)];
                    });
                });
            },
        };
        _this.staticCall = {
            callAsync: function (target_0, calldata_1, extradata_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.staticCall(target_0, calldata_1, extradata_2).call(txData)];
                    });
                });
            },
        };
        _this.changeMinimumMakerProtocolFee = {
            sendTransactionAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumMakerProtocolFee.estimateGasAsync.bind(self, newMinimumMakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumMakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumMakerProtocolFee_0) {
                return this.contract.methods.changeMinimumMakerProtocolFee(newMinimumMakerProtocolFee_0).encodeABI();
            },
        };
        _this.changeMinimumTakerProtocolFee = {
            sendTransactionAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeMinimumTakerProtocolFee.estimateGasAsync.bind(self, newMinimumTakerProtocolFee_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (newMinimumTakerProtocolFee_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (newMinimumTakerProtocolFee_0) {
                return this.contract.methods.changeMinimumTakerProtocolFee(newMinimumTakerProtocolFee_0).encodeABI();
            },
        };
        _this.guardedArrayReplace = {
            callAsync: function (array_0, desired_1, mask_2, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.guardedArrayReplace(array_0, desired_1, mask_2).call(txData)];
                    });
                });
            },
        };
        _this.chageAuctionBroker = {
            sendTransactionAsync: function (newAuctionBroker_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.chageAuctionBroker.estimateGasAsync.bind(self, newAuctionBroker_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.chageAuctionBroker(newAuctionBroker_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (newAuctionBroker_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.chageAuctionBroker(newAuctionBroker_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (newAuctionBroker_0) {
                return this.contract.methods.chageAuctionBroker(newAuctionBroker_0).encodeABI();
            },
        };
        _this.minimumTakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.minimumTakerProtocolFee().call(txData)];
                    });
                });
            },
        };
        _this.testCopyAddress = {
            callAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.testCopyAddress(addr_0).call(txData)];
                    });
                });
            },
        };
        _this.testCopy = {
            callAsync: function (arrToCopy_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.testCopy(arrToCopy_0).call(txData)];
                    });
                });
            },
        };
        _this.calculateCurrentPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.calculateCurrentPrice_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8).call(txData)];
                    });
                });
            },
        };
        _this.changeProtocolFeeRecipient = {
            sendTransactionAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.changeProtocolFeeRecipient.estimateGasAsync.bind(self, newProtocolFeeRecipient_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.changeProtocolFeeRecipient(newProtocolFeeRecipient_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (newProtocolFeeRecipient_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.changeProtocolFeeRecipient(newProtocolFeeRecipient_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (newProtocolFeeRecipient_0) {
                return this.contract.methods.changeProtocolFeeRecipient(newProtocolFeeRecipient_0).encodeABI();
            },
        };
        _this.version = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.version().call(txData)];
                    });
                });
            },
        };
        _this.orderCalldataCanMatch = {
            callAsync: function (buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.orderCalldataCanMatch(buyCalldata_0, buyReplacementPattern_1, sellCalldata_2, sellReplacementPattern_3).call(txData)];
                    });
                });
            },
        };
        _this.validateOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.validateOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11).call(txData)];
                    });
                });
            },
        };
        _this.calculateFinalPrice = {
            callAsync: function (side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.calculateFinalPrice(side_0, saleKind_1, basePrice_2, extra_3, listingTime_4, expirationTime_5).call(txData)];
                    });
                });
            },
        };
        _this.protocolFeeRecipient = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.protocolFeeRecipient().call(txData)];
                    });
                });
            },
        };
        _this.renounceOwnership = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.renounceOwnership.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.renounceOwnership()
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.renounceOwnership().estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return this.contract.methods.renounceOwnership().encodeABI();
            },
        };
        _this.hashOrder_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.hashOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8).call(txData)];
                    });
                });
            },
        };
        _this.ordersCanMatch_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.ordersCanMatch_(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8).call(txData)];
                    });
                });
            },
        };
        _this.approveOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.approveOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.approveOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.approveOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9) {
                return this.contract.methods.approveOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, orderbookInclusionDesired_9).encodeABI();
            },
        };
        _this.registry = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.registry().call(txData)];
                    });
                });
            },
        };
        _this.minimumMakerProtocolFee = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.minimumMakerProtocolFee().call(txData)];
                    });
                });
            },
        };
        _this.hashToSign_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.hashToSign_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8).call(txData)];
                    });
                });
            },
        };
        _this.cancelledOrFinalized = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.cancelledOrFinalized(index_0_0).call(txData)];
                    });
                });
            },
        };
        _this.exchangeToken = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.exchangeToken().call(txData)];
                    });
                });
            },
        };
        _this.cancelOrder_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.cancelOrder_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.cancelOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.cancelOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11) {
                return this.contract.methods.cancelOrder_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, v_9, r_10, s_11).encodeABI();
            },
        };
        _this.atomicMatch_ = {
            sendTransactionAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.atomicMatch_.estimateGasAsync.bind(self, addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.atomicMatch_(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.atomicMatch_(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10) {
                return this.contract.methods.atomicMatch_(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, vs_9, rssMetadata_10).encodeABI();
            },
        };
        _this.validateOrderParameters_ = {
            callAsync: function (addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.validateOrderParameters_(addrs_0, uints_1, feeMethod_2, side_3, saleKind_4, howToCall_5, calldata_6, replacementPattern_7, staticExtradata_8).call(txData)];
                    });
                });
            },
        };
        _this.INVERSE_BASIS_POINT = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.INVERSE_BASIS_POINT().call(txData)];
                    });
                });
            },
        };
        _this.calculateMatchPrice_ = {
            callAsync: function (addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.calculateMatchPrice_(addrs_0, uints_1, feeMethodsSidesKindsHowToCalls_2, calldataBuy_3, calldataSell_4, replacementPatternBuy_5, replacementPatternSell_6, staticExtradataBuy_7, staticExtradataSell_8).call(txData)];
                    });
                });
            },
        };
        _this.approvedOrders = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.approvedOrders(index_0_0).call(txData)];
                    });
                });
            },
        };
        _this.transferOwnership = {
            sendTransactionAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.transferOwnership(newOwner_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (newOwner_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.transferOwnership(newOwner_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (newOwner_0) {
                return this.contract.methods.transferOwnership(newOwner_0).encodeABI();
            },
        };
        utils_1.classUtils.bindAll(_this, ['contract', 'defaults']);
        return _this;
    }
    return WyvernExchangeContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernExchangeContract = WyvernExchangeContract;
//# sourceMappingURL=wyvern_exchange.js.map