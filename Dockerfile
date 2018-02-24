FROM novemberde/node-pm2

ENV PORT 80

ADD ./bin/main.js /src
ADD ./process.yml /src

WORKDIR /src

RUN ["pm2-docker", "process.yml"]