FROM novemberde/node-pm2

ENV PORT 80

ADD ./bin /src

WORKDIR /src

RUN ["pm2-docker", "main.js"]