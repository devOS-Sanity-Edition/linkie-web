# Setup Node Alpine image
FROM node:20-alpine AS builder

RUN npm install -g http-server

# Setup work directory
ENV APP_HOME=/app
WORKDIR $APP_HOME


# copy both 'package.json' and 'package-lock.json' (if available)
COPY frontend/package*.json $APP_HOME/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY frontend/ $APP_HOME/

RUN npm run build

FROM registry.gitlab.com/artrinix/web-server:latest

ENV APP_HOME=/app

COPY --from=builder $APP_HOME/dist/ /dist
COPY template.tmpl /dist/template.tmpl

ENV ENTRYPOINT="src/main.ts"
ENV PLATFORM="vue"
ENV PORT=:8080
EXPOSE $PORT

WORKDIR /

ENTRYPOINT [ "/server" ]