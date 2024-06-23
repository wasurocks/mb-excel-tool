FROM node:16

WORKDIR /home/node/app

COPY package.json ./

RUN npm i

COPY . .

ENV NODE_PATH=./build
ENV MB_BASE_URL=mountebank

RUN npm run build