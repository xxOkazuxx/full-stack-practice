FROM node:21-alpine3.18

USER node
WORKDIR /home/node/app

CMD ["/bin/sh", "-c", "yarn install && yarn dev"]