FROM node:20-alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

EXPOSE 8545

CMD [ "npx", "hardhat", "node" ]