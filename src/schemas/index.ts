// To help typescript find the type
import { Schema } from "../types";

import { schemas as mainSchemas } from "./main/index";
import { schemas as rinkebySchemas } from "./rinkeby/index";
import { schemas as bscSchemas } from "./bsc/index";
import { schemas as bscTestnetSchema } from "./bsc_testnet/index";
import { schemas as polygonSchema } from "./polygon";
import { schemas as mumbaiSchema} from "./mumbai"
export const schemas = {
  rinkeby: rinkebySchemas,
  main: mainSchemas,
  bsc_mainnet: bscSchemas,
  bsc_testnet: bscTestnetSchema,
  polygon:polygonSchema,
  mumbai:mumbaiSchema
};
