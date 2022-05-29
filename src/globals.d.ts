/* tslint:enable */

declare module "*.json" {
  const json: any;
  /* tslint:disable */
  export default json;
  /* tslint:enable */
}

declare module "@melosstudio/ethereumjs-abi" {
  const soliditySHA3: (argTypes: string[], args: any[]) => Buffer;
  const methodID: (name: string, types: string[]) => Buffer;
  const rawEncode: (argTypes: string[], args: any[]) => Buffer;
  const encodeSingle: (type: string, arg: any) => Buffer;
  const elementaryName: (name: string) => string;
  const isDynamic: (type: string) => boolean;
}

// find-version declarations
declare function findVersions(version: string): string[];
declare module "find-versions" {
  export = findVersions;
}

// compare-version declarations
declare function compareVersions(
  firstVersion: string,
  secondVersion: string
): number;
declare module "compare-versions" {
  export = compareVersions;
}
