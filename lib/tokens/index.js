"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
var index_1 = require("./main/index");
var index_2 = require("./rinkeby/index");
var index_3 = require("./bsc_mainnet/index");
var index_4 = require("./bsc_testnet/index");
exports.tokens = {
    rinkeby: index_2.rinkebyTokens,
    main: index_1.mainTokens,
    bsc_mainnet: index_3.bscTokens,
    bsc_testnet: index_4.bscTestnetTokens,
};
//# sourceMappingURL=index.js.map