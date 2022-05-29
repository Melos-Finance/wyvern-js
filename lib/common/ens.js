"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENSNameBaseSchema = exports.nodehash = exports.namehash = void 0;
var ethereumjs_util_1 = require("ethereumjs-util");
var namehash = function (name) {
    var node = "0000000000000000000000000000000000000000000000000000000000000000";
    if (name !== "") {
        var labels = name.split(".");
        for (var i = labels.length - 1; i >= 0; i--) {
            var labelHash = (0, ethereumjs_util_1.sha256FromString)(labels[i]).toString("hex");
            node = (0, ethereumjs_util_1.sha256)(Buffer.from(node + labelHash, "hex")).toString("hex");
        }
    }
    return "0x" + node.toString();
};
exports.namehash = namehash;
var nodehash = function (name) {
    var label = name.split(".")[0];
    if (label) {
        return "0x" + (0, ethereumjs_util_1.sha256FromString)(label).toString("hex");
    }
    else {
        return "";
    }
};
exports.nodehash = nodehash;
exports.ENSNameBaseSchema = {
    fields: [
        { name: "Name", type: "string", description: "ENS Name" },
        {
            name: "NodeHash",
            type: "bytes32",
            description: "ENS Node Hash",
            readOnly: true,
        },
        {
            name: "NameHash",
            type: "bytes32",
            description: "ENS Name Hash",
            readOnly: true,
        },
    ],
    assetFromFields: function (fields) { return ({
        id: fields.ID,
        address: fields.Address,
        name: fields.Name,
        nodeHash: (0, exports.nodehash)(fields.Name),
        nameHash: (0, exports.namehash)(fields.Name),
    }); },
    checkAsset: function (asset) {
        return asset.name
            ? (0, exports.namehash)(asset.name) === asset.nameHash &&
                (0, exports.nodehash)(asset.name) === asset.nodeHash
            : true;
    },
    hash: function (_a) {
        var nodeHash = _a.nodeHash;
        return nodeHash;
    },
};
//# sourceMappingURL=ens.js.map