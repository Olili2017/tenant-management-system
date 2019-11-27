FROM openjdk:12

# RUN apt-get install maven

# WORKDIR /usr/src/app

COPY target/registry-tenant-registry-1.0.0.jar tenant-registry-1.0.0.jar

# RUN mvn clean install

EXPOSE 80

ENTRYPOINT [ "java", "-jar", "tenant-registry-1.0.0.jar" ]