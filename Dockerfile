# Builder stage

FROM node:14-alpine

ARG ARG_API_URL
ENV API_URL=$ARG_API_URL
ARG ARG_HASURA_GRAPHQL_ADMIN_SECRET
ENV HASURA_GRAPHQL_ADMIN_SECRET=$ARG_HASURA_GRAPHQL_ADMIN_SECRET

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy source files
COPY . .

# Build
RUN yarn build

ENV NODE_ENV=production
EXPOSE 3000
CMD yarn start
