Project to run blockchain for and API.

## Dot Env
```sh
# Change your api_key to correct api_key
MAINNET_RPC=https://polygon-mainnet.g.alchemy.com/v2/{api_key}
BLOCK_NUMBER=60324439
LOCAL_RPC=http://blockchain:8545
API_PORT=3000
```

## Docker to up all services
```sh
# build you container+images
docker compose up --build
```