FROM node:18
WORKDIR /app
COPY . .
RUN npm clean-install
USER "${USER}"
CMD [ "node", "server.js" ]