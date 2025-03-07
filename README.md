# Introduction

This is a minimal example of using [ts-proto](https://github.com/stephenh/ts-proto) to generate TypeScript from [hello.proto](hello.proto).

## Replication

```bash
# initialize a new project
npm init -y

# install main dependencies
npm install @grpc/grpc-js

# install development dependencies
npm install -D ts-proto tsx typescript

# initialize tsconfig
npx tsc --init

# generate types from ur proto file (assuming .proto files are in src/protos)
protoc \
  --plugin=protoc-gen-ts_proto=./node_modules/.bin/protoc-gen-ts_proto \
  --ts_proto_out=./src/generated \
  --ts_proto_opt=outputServices=grpc-js \
  -I ./src/protos \
  ./src/protos/*.proto

```

Add to the bottom of tsconfig.json

```
"rootDir": "./src",
"outDir": "./dist"
```


## Build
for builds see package.json scripts section


