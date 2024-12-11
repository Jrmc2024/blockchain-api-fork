FROM node:20-alpine

WORKDIR /app

COPY package*.json .
COPY hardhat.config.js .
COPY .env .

RUN npm install

EXPOSE 8545

CMD [ "npx", "hardhat", "node" ]