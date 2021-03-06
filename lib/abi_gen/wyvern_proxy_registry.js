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
exports.WyvernProxyRegistryContract = void 0;
var base_contract_1 = require("./base_contract");
var utils_1 = require("@0x/utils");
var WyvernProxyRegistryContract = /** @class */ (function (_super) {
    __extends(WyvernProxyRegistryContract, _super);
    function WyvernProxyRegistryContract(contract, defaults) {
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
        _this.initialAddressSet = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.initialAddressSet().call(txData)];
                    });
                });
            },
        };
        _this.endGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.endGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.endGrantAuthentication(addr_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.endGrantAuthentication(addr_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                return this.contract.methods.endGrantAuthentication(addr_0).encodeABI();
            },
        };
        _this.revokeAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.revokeAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.revokeAuthentication(addr_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.revokeAuthentication(addr_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                return this.contract.methods.revokeAuthentication(addr_0).encodeABI();
            },
        };
        _this.pending = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.pending(index_0_0).call(txData)];
                    });
                });
            },
        };
        _this.contracts = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.contracts(index_0_0).call(txData)];
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
        _this.delegateProxyImplementation = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.delegateProxyImplementation().call(txData)];
                    });
                });
            },
        };
        _this.proxies = {
            callAsync: function (index_0_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.proxies(index_0_0).call(txData)];
                    });
                });
            },
        };
        _this.startGrantAuthentication = {
            sendTransactionAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.startGrantAuthentication.estimateGasAsync.bind(self, addr_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.startGrantAuthentication(addr_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (addr_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.startGrantAuthentication(addr_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (addr_0) {
                return this.contract.methods.startGrantAuthentication(addr_0).encodeABI();
            },
        };
        _this.registerProxy = {
            sendTransactionAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.registerProxy.estimateGasAsync.bind(self))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.registerProxy()
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
                        return [2 /*return*/, this.contract.methods.registerProxy().estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function () {
                return this.contract.methods.registerProxy().encodeABI();
            },
        };
        _this.DELAY_PERIOD = {
            callAsync: function (txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.DELAY_PERIOD().call(txData)];
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
        _this.grantInitialAuthentication = {
            sendTransactionAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.grantInitialAuthentication.estimateGasAsync.bind(self, authAddress_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.grantInitialAuthentication(authAddress_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.grantInitialAuthentication(authAddress_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (authAddress_0) {
                return this.contract.methods.grantInitialAuthentication(authAddress_0).encodeABI();
            },
        };
        _this.grantAuthentication = {
            sendTransactionAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    var self, txDataWithDefaults;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                self = this;
                                return [4 /*yield*/, self.applyDefaultsToTxDataAsync(txData, self.grantAuthentication.estimateGasAsync.bind(self, authAddress_0))];
                            case 1:
                                txDataWithDefaults = _a.sent();
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        self.contract.methods.grantAuthentication(authAddress_0)
                                            .send(txDataWithDefaults)
                                            .once("transactionHash", function (txHash) { return resolve(txHash); })
                                            .once("error", function (error) { return reject(error); });
                                    })];
                        }
                    });
                });
            },
            estimateGasAsync: function (authAddress_0, txData) {
                if (txData === void 0) { txData = {}; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        return [2 /*return*/, this.contract.methods.grantAuthentication(authAddress_0).estimateGas(txData)];
                    });
                });
            },
            getABIEncodedTransactionData: function (authAddress_0) {
                return this.contract.methods.grantAuthentication(authAddress_0).encodeABI();
            },
        };
        utils_1.classUtils.bindAll(_this, ['contract', 'defaults']);
        return _this;
    }
    return WyvernProxyRegistryContract;
}(base_contract_1.BaseContract)); // tslint:disable:max-file-line-count
exports.WyvernProxyRegistryContract = WyvernProxyRegistryContract;
//# sourceMappingURL=wyvern_proxy_registry.js.map