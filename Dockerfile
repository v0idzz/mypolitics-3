FROM node:14-slim AS build

<<<<<<< HEAD
RUN apt-get update && apt-get install -y libglu1 libxi6 libgconf-2-4

=======
>>>>>>> main
WORKDIR /app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]
