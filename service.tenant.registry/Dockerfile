FROM node:8

RUN npm install -g nodemon

RUN mkdir - p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

# RUN npm audit fix

RUN npm install --save axios

RUN npm install

ENTRYPOINT ["nodemon", "server.js"]