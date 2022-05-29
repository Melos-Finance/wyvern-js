import {
  FunctionInputKind,
  FunctionOutputKind,
  Schema,
  AbiType,
} from "../../../types";
import { ERC1155Schema, SemiFungibleTradeType } from "../../ERC1155";

export const EnjinItemSchema: Schema<SemiFungibleTradeType> = {
  ...ERC1155Schema,
  version: 1,
  deploymentBlock: 0, // Not indexed (for now; need asset-specific indexing strategy)
  name: "Enjin",
  description:
    "Items conforming to the Enjin implementation of the ERC1155 spec.",
  website: "https://enjincoin.io/",
  functions: {
    ...ERC1155Schema.functions,
    ownerOf: (asset) => ({
      type: "function",
      name: "ownerOf",
      payable: false,
      constant: true,
      stateMutability: "view",
      target: asset.address,
      inputs: [
        {
          kind: FunctionInputKind.Asset,
          name: "_id",
          type: "uint256",
          value: asset.id,
        },
      ],
      outputs: [
        { kind: FunctionOutputKind.Owner, name: "owner", type: "address" },
      ],
    }),
    // Parameters are flipped from 1155
    countOf: (asset) => ({
      type: "function",
      name: "balanceOf",
      payable: false,
      constant: true,
      stateMutability: "view",
      target: asset.address,
      inputs: [
        {
          kind: FunctionInputKind.Asset,
          name: "_id",
          type: "uint256",
          value: asset.id,
        },
        { kind: FunctionInputKind.Owner, name: "_owner", type: "address" },
      ],
      outputs: [
        { kind: FunctionOutputKind.Count, name: "balance", type: "uint" },
      ],
      assetFromOutputs: (outputs: any) => outputs.balance,
    }),
    assetsOfOwnerByIndex: [],
  },
};
