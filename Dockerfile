
FROM node:alpine as builder

WORKDIR /app

COPY package*.json ./

RUN apk add --no-cache build-base gcc autoconf automake libtool zlib-dev libpng-dev nasm

RUN npm update

RUN npm install

COPY . .

RUN ["npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=builder /app/public /usr/share/nginx/html