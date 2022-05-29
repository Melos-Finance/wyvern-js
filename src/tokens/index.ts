// To help typescript find the type
import { NetworkTokens } from "../types";

import { mainTokens } from "./main/index";
import { rinkebyTokens } from "./rinkeby/index";
import { bscTokens } from "./bsc_mainnet/index";
import { bscTestnetTokens } from "./bsc_testnet/index";
export const tokens = {
  rinkeby: rinkebyTokens,
  main: mainTokens,
  bsc_mainnet: bscTokens,
  bsc_testnet: bscTestnetTokens,
};
