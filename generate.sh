#!/usr/bin/env bash

mkdir -p ./src/generated

protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/generated \
  --ts_proto_opt=outputServices=grpc-js \
  -I ./src/protos \
  ./src/protos/*.proto
