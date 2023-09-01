FROM node:20
WORKDIR /app
COPY . .
RUN npm clean-install
USER "${USER}"
CMD [ "node", "server.js" ]