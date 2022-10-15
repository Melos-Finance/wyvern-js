"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemas = void 0;
var index_1 = require("./main/index");
var index_2 = require("./rinkeby/index");
var index_3 = require("./bsc/index");
var index_4 = require("./bsc_testnet/index");
var polygon_1 = require("./polygon");
var mumbai_1 = require("./mumbai");
var goerli_1 = require("./goerli");
exports.schemas = {
    rinkeby: index_2.schemas,
    main: index_1.schemas,
    bsc_mainnet: index_3.schemas,
    bsc_testnet: index_4.schemas,
    polygon: polygon_1.schemas,
    mumbai: mumbai_1.schemas,
    goerli: goerli_1.schemas,
};
//# sourceMappingURL=index.js.map