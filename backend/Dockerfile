#./backend/Dockerfile
FROM node:alpine

WORKDIR /usr/app

ADD . /usr/app

RUN yarn install -D && yarn install

EXPOSE 3333

RUN ["chmod", "+x", "./init.sh"]

ENTRYPOINT ["./init.sh"]