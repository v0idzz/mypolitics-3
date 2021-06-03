FROM node:14-slim AS build

RUN apt-get update && apt-get install -y libglu1

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]
