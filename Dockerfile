FROM node:14-slim AS build

RUN mkdir /app

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]

