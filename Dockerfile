FROM node:8

WORKDIR /usr/src/app
LABEL maintainer="antlopsou@gmail.com"

#Install basics
RUN apt-get update

#GIT
RUN apt-get install git-core -y
RUN git init
RUN git config user.name 'TITANLUX619'
RUN git config user.email 'antlopsou@gmail.com'

RUN git clone https://github.com/TITANLUX619/men-api.git

WORKDIR /usr/src/app/men-api
RUN npm install
CMD [ "npm", "start" ]

EXPOSE 3000



