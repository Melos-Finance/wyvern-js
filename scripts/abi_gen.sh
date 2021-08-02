#!/bin/sh

yarn run abi-gen --abis '../wyvern-ethereum/build/contracts/@(WyvernToken|WyvernDAO|WyvernExchange|WyvernProxyRegistry|WyvernAtomicizer).json' --partials ./src/abi_templates/partials/**/*.mustache --template ./src/abi_templates/contract.mustache --output ./src/abi_gen 
