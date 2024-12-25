FROM node:20-alpine

RUN mkdir /app

WORKDIR /app

COPY . .

RUN yarn install

CMD [ "npx", "hardhat", "node" ]