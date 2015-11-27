FROM node:4.2.2

RUN npm install -g pm2

COPY . /src
RUN rm -rf /src/node_modules
RUN cd /src; npm install

WORKDIR /src

CMD ["npm", "run", "production"]
