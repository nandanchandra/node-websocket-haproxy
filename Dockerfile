FROM node:13
WORKDIR /home/node/chatapp
COPY . /home/node/chatapp
RUN npm install
CMD npm run chatapp