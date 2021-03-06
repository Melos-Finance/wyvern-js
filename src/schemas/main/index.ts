import { Schema } from "../../types";
import { ContractRoleSchema } from "../ContractRole/index";
import { ERC1155Schema } from "../ERC1155";
import { ERC20Schema } from "../ERC20";
import { ERC721Schema } from "../ERC721/index";

import { CryptoKittiesSchema } from "./CryptoKitties/index";
import { CryptoPunksSchema } from "./CryptoPunks/index";
import { EnjinItemSchema } from "./EnjinItem";
import { ENSNameSchema } from "./ENSName/index";
import { ENSShortNameAuctionSchema } from "./ENSShortNameAuction/index";
import { OwnableContractSchema } from "./OwnableContract/index";

export const schemas: Array<Schema<any>> = [
  CryptoKittiesSchema,
  CryptoPunksSchema,
  ENSNameSchema,
  ENSShortNameAuctionSchema,
  OwnableContractSchema,
  ERC20Schema,
  ERC721Schema,
  ERC1155Schema,
  EnjinItemSchema,
  ContractRoleSchema,
];
