FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache curl

COPY package*.json .
COPY server.js .
COPY .env .

RUN npm install

EXPOSE 3000

CMD [ "node", "server.js" ]