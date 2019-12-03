FROM node:8

LABEL maintainer "Daniel Olili" email "olilidaniel48@gmail.com"

RUN npm install -g nodemon

RUN mkdir - p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN npm install

EXPOSE 5000

ENTRYPOINT ["nodemon", "server.js"]

# HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "curl -f http://localhost:5000 || exit 1" ]