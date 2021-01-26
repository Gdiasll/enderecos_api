FROM node:erbium-alpine as base

COPY --chown=node:node ./package.json ./yarn.lock /var/www/
RUN chmod -R 0744 /var/www

WORKDIR /var/www
RUN yarn install

COPY . /var/www
EXPOSE 3000
RUN yarn run build
CMD [ "sh", "/var/www/entrypoint.sh" ]