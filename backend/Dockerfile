FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3333

RUN ["chmod", "+x", "./init.sh"]

ENTRYPOINT ["./init.sh"]
