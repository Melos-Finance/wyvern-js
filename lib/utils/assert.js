"use strict";
/* Sourced from 0x.js */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assert = void 0;
var assert_1 = require("@0x/assert");
var signature_utils_1 = require("../utils/signature_utils");
exports.assert = __assign(__assign({}, assert_1.assert), { isValidSignature: function (orderHash, ecSignature, signerAddress) {
        var isValidSignature = signature_utils_1.signatureUtils.isValidSignature(orderHash, ecSignature, signerAddress);
        this.assert(isValidSignature, "Expected order with hash '" + orderHash + "' to have a valid signature");
    } });
//# sourceMappingURL=assert.js.map