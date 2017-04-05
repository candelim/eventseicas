FROM node:5

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./kafkaproducer /usr/src/app
COPY ./run.sh /usr/src/app
COPY ./start.sh /usr/src/app

RUN chmod +x *.sh 

RUN unlink /etc/localtime
RUN ln -s /usr/share/zoneinfo/America/Argentina/Buenos_Aires /etc/localtime

RUN npm install
RUN npm install sleep

ENTRYPOINT ["/usr/src/app/run.sh"]
