/* Sourced from 0x.js */

import { assert as sharedAssert } from "@0x/assert";
// We need those two unused imports because they're actually used by sharedAssert which gets injected here
// tslint:disable-next-line:no-unused-variable
import { schemas } from "@0x/json-schemas";
// tslint:disable-next-line:no-unused-variable
import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

import { ECSignature } from "../types";
import { signatureUtils } from "../utils/signature_utils";

export const assert = {
  ...sharedAssert,
  isValidSignature(
    orderHash: string,
    ecSignature: ECSignature,
    signerAddress: string
  ) {
    const isValidSignature = signatureUtils.isValidSignature(
      orderHash,
      ecSignature,
      signerAddress
    );
    this.assert(
      isValidSignature,
      `Expected order with hash '${orderHash}' to have a valid signature`
    );
  },
};
