import { Schema } from "../../types";
import { ContractRoleSchema } from "../ContractRole/index";
import { ERC1155Schema } from "../ERC1155";
import { ERC20Schema } from "../ERC20";
import { ERC721Schema } from "../ERC721/index";

export const schemas: Array<Schema<any>> = [
  ERC20Schema,
  ERC721Schema,
  ERC1155Schema,

  ContractRoleSchema,
];
