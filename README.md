Project to run blockchain for and API.

## Dot Env
Create .env and paste variables bellow into .env.
Remember change you Alchemy api_key and if you don't use Alchemy change entire RPC url to other
RPC.
```sh
# Change your api_key to correct api_key
MAINNET_RPC=https://polygon-mainnet.g.alchemy.com/v2/{api_key}
BLOCK_NUMBER=60324439
LOCAL_RPC=http://blockchain:8545
API_PORT=3002
```

## Docker to up all services
```sh
# build you container+images
docker compose up --build
```