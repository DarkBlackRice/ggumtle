FROM openjdk:17-alpine

EXPOSE 8081

WORKDIR /app

VOLUME /logs

ADD ./build/libs/*SHOT.jar /app.jar

ENTRYPOINT ["java", "-jar", "/app.jar"]
