#!/bin/sh

yarn run abi-gen --abis '../wyvern-ethereum/build/contracts/@(WyvernExchange|WyvernProxyRegistry|WyvernAtomicizer).json' --backend web3 --partials ./src/abi_templates/partials/**/*.mustache --template ./src/abi_templates/contract.mustache --output ./src/abi_gen 
