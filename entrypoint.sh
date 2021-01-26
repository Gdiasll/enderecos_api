#!/bin/sh

yarn run build
yarn install
# Inicia API
yarn run start:prod
