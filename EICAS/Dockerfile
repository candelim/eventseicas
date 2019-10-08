FROM node:10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./kafkaproducer /usr/src/app

RUN unlink /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Argentina/Buenos_Aires /etc/localtime

RUN npm install

ENTRYPOINT ["/usr/local/bin/npm", "start"]
