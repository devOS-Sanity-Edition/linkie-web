# Setup Gradle
FROM openjdk:17-jdk-oracle AS builder

# Setup work directory
ENV APP_HOME=/app
WORKDIR $APP_HOME

# Install findutils for xargs shit in the gradlew
RUN microdnf install findutils

# Copy entirety of the Backend to work directory
COPY backend/ $APP_HOME/

RUN ls

# Build the backend
RUN ./gradlew build

# Run backend application
FROM gcr.io/distroless/java21-debian12:latest

# Setup work directory
ENV APP_HOME=/app

COPY --from=builder $APP_HOME/build/libs/linkie-web-backend.jar $APP_HOME/

WORKDIR $APP_HOME


ENV PORT=8443
EXPOSE $PORT

CMD [ "linkie-web-backend.jar" ]