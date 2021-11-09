# Portfolio S3

This project is created with React and springboot.

#### 1. Why am i using React for this project?

The reason i use React for this project is because i want to learn it for the future. 1 goal of mine is too learn mobile development and react native is a good thing to master if i wanna go that route one day. I can acomplish this goal easier if i used React before. So this is my main reason to use React in this semester.

#### 2. SQl or NoSQL database?

By doing some research about SQl or NoSQL i came to a conclusion. For my application (webshop) the best choice is to use a SQL-database. This is a good choice because my data is structured. A good project to have a NoSQL database is for example twitter where your data is all random. The plan for this project is to make 3 databases each related to 1 thing. So for example i would have 1 database for products only. This makes it single responsibility too. 


# Start of the project

### User stories

<table>
  <tr>
    <td><img src="https://i.postimg.cc/65qPKrJ3/user-story-1.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/x1S4WcQp/user-story-2.png" width=500 height=250></td> 
  </tr>
 <tr>
    <td><img src="https://i.postimg.cc/VsC4mmDx/user-story-3.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/ncdXWQqp/user-story-4.png" width=500 height=250></td> 
  </tr>
 <tr>
    <td><img src="https://i.postimg.cc/xj58kbxM/user-story-5.png" width=500 height=250></td> 
  </tr>
 </table>
 
 ### C4 Model
 
 #### C1 
 
 <img src="https://i.postimg.cc/263sTPLx/C4-model-1-V2-webshop.png" width=750 height=500>
 
 #### C2
  
<img src="https://i.postimg.cc/jjSQ7TBZ/C2-model-V2-webshop.png" width=750 height=500>
 
 #### C3
 
 <img src="https://i.postimg.cc/XqdDz3j9/C4-model-3-V2-webshop.png" width=750 height=500>


# Learning outcomes

These are all the learning outcomes i need to acomplish by the end of the semester.

## Outcome 1: You design and build user-friendly, full stack web applications

### 1. Product service: show products with an api call

As you can see on the pictures there are a couple of products shown. These products are coming from the productservice API that is connected to a MySQL database.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/kXfCQC87/Products.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/vmpb4vn9/Productservice.png" width=500 height=250></td> 
  </tr>
 </table>
 
 sources: 
 
 - [JPA repository](javatpoint.com/spring-boot-jpa)

### 2. Identity service: Login, Register and account information service with 0Auth2

With this service the website is able to login and register users. I implemented this because i want users to eventually make orders with their own accounts. When the user is logged in on the website he is also able to see his own account information. Both these functionalities are shown on the image below.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/QMn8B32J/Identity-service.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/pTHKm8zv/Login.png" width=500 height=250></td> 
  </tr>
 </table>
 
sources: 

- [Docs Auth0](https://auth0.com/docs/quickstart/spa/react)
- [Video from codestacker](https://www.youtube.com/watch?v=MqczHS3Z2bc)

### 3. Discovery service: show all the services

When the client makes a request on the webshop the discovery service will make sure that you can find the microservices in your architecture. Its good to understand that this discovery service knows where are the services are. And also its good to understand that all these microservices that want to be discovered will be saying to the discovery service "Let them know im here to be used". I can make sure that the these services can be discoverd by adding the code below to the startup file in the springboot application.

```
@EnableEurekaClient
```

<table>
  <tr>
    <td><img src="https://i.postimg.cc/L6xcTTsx/Discovery-server.png" width=500 height=250></td> 
  </tr>
 </table>

sources:

- [Java brains: understanding discovery service](https://www.youtube.com/watch?v=e09P-CkCvvs&ab_channel=JavaBrains)

### 4. API-Gateway: Use only 1 port

A good way to describe an API-Gateway is an entry point for all clients. You can add different services in the YML file to make sure they all run true the gateway. This gateway also makes it very easy for requests because all the services go true 1 port now (mine runs on 9292). You can see this on the image below. If i want to add some kind of security i am able to implement authorization  when a client is making requests for example.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/bv8vbRCm/API-Gateway-request-on-9192-port.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/1tdPW0Bh/YML-file.png" width=500 height=250></td> 
  </tr>
 </table>

sources:

- [Java brains](https://www.youtube.com/watch?v=1vjOv_f9L8I&t=5s&ab_channel=JavaBrains)
- [Daily code buffer](https://www.youtube.com/watch?v=BnknNTN8icw&t=3826s&ab_channel=DailyCodeBuffer)

## Outcome 2: Tooling and methodology

### 1. Unit and integration tests

For this learning outcome i made some unit and integration tests. This will verify that my application is doing what its supposed to do. Also a good benefit of testing is preventing bugs and helps with the quality of the code. Below on the images you can see 2 sort of tests i made: unit and integration tests. Here is some explanation on both of these tests. 

<code>Unit testing:</code> This is a testing technic that tests individual units of code (methods). So for example in my application 1 test only test the method that i can get all the products or that i can create a product. Possibly the developer will be using mockobjects to simulate behaviors of objects. This is helpfull when you are testing because you can use fake objects instead of the real objects from your project.

<code> Integration testing:</code> With integration testing the entire process in tested (in this case a specific request). This is done with MockMvc. MockMvc allows you to send fake HTTP requests to a controller and test how the controller behaves. A good way to test these request is with fake data so when you want to create a new product for example you already tested the request with fake product data that you made up. This way you can test the entire application process.

 Unit test                      |                      Integration test 
:-------------------------:|:-------------------------:
![](https://i.postimg.cc/PJ4RLdMN/Unit-test-1.png)  |  ![](https://i.postimg.cc/hjRypXyf/Integration-test-1.png)
![](https://i.postimg.cc/T2qSNcXG/Unit-test-2.png)  |  ![](https://i.postimg.cc/vB7PjGkX/Integration-test-2.png)
![](https://i.postimg.cc/qvYZ6b2c/Unit-test-results.png)  |  ![](https://i.postimg.cc/cCXFxXsn/Integration-test-results.png)

sources:

- [Kris Foster](https://www.youtube.com/watch?v=aEW8ZH6wj2o&ab_channel=KrisFoster)
- [Stackoverflow what is mocking?](https://stackoverflow.com/questions/2665812/what-is-mocking)
- [Amigoscode](https://www.youtube.com/watch?v=Geq60OVyBPg&t=3600s&ab_channel=Amigoscode)

### 2. Automating tests on push 

After making the tests above i needed to automate this by testing everytime when i push. This makes sure the code is always tested everytime i make a new change. The quality of the code

```
name: tests
on: push
jobs:
  run_tests:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the repository
        uses: actions/checkout@v2
      - name: Set up JDK 14
        uses: actions/setup-java@v1
        with:
          java-version: 14
      - name: Cache Maven packages
        uses: actions/cache@v2
        with:
          path: ~/.m2
          key: ${{ runner.os }}-m2-${{ hashFiles('**/pom.xml') }}
          restore-keys: ${{ runner.os }}-m2
      - name: Run tests with Maven
        run: mvn -B test --file pom.xml
```

<table>
  <tr>
    <td><img src="https://i.postimg.cc/QCjbKRhW/Test1.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/ry9g2FNG/Test2.png" width=500 height=250></td> 
  </tr>
 </table>

## Outcome 3: Design and implement (release process)

### 1. Docker containers

Below here you can see the docker containers i made for my project. These are all the microservices i am currenlty using for my webshop. Now that i made these containers i can deploy them easily. Further benefits are: 

- The ability to run multiple processes and apps separately from one another to make better use of my infrastructure.
- Container tools, including Docker, provide an image-based deployment model. This makes it easy to share an application, or set of services, with all of their     dependencies across multiple environments
- Docker automates deploying the application (or combined sets of processes that make up an app) inside this container environment.

Here is also a quick step by step tutorial for making a Docker container in springboot (terminal)

1. Create a docker file in your application with these properties:

```
FROM openjdk:11
EXPOSE <PORT>
ADD target/<PROJECT_NAME>.jar <PROJECT_NAME>.jar
ENTRYPOINT ["java", "-jar", "/<PROJECT_NAME>"]
```
2. Get the jar file by using <Code>MVN Package</Code> in the terminal
3. run <Code>Docker build -t username/your-project-name . </Code>
4. <Code>docker tag username/your-project-name username/your-project-name</Code>
5. <Code>docker push username/your-project-name</Code>

Sometimes you need to login or logout first with <Code>docker login/logout</Code>

<table>
  <tr>
    <td><img src="https://i.postimg.cc/d1yjpqvW/Docker-hub.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/3NQFHPx3/Docker-desktop.png" width=500 height=250></td> 
  </tr>
 </table>
 
 sources: 

- [Docs Docker]( https://docs.docker.com/)
- [RedHat](https://www.redhat.com/en/topics/containers/what-is-docker?sc_cid=7013a000002wLw5AAE&gclid=Cj0KCQjwwY-LBhD6ARIsACvT72ME-xBAV_4dIjlqq1IY67_o-kxZBXOdmLtnJftRsT9cghKwGqPfZRkaAkF3EALw_wcB&gclsrc=aw.ds)

### 2. Deploy webservices with Github actions

```
FROM maven:3.8.3-jdk-11 AS build-env

WORKDIR /app

COPY pom.xml ./
RUN mvn dependency:go-offline

#RUN mvn spring-javaformat:help
#RUN ./mvnw spring-javaformat:help

COPY . ./

#RUN mvn spring-javaformat:apply
#RUN ./mvnw spring-javaformat:apply
RUN mvn package -DfinalName=productservice-shop

FROM openjdk:11

EXPOSE 8085

WORKDIR /app

COPY --from=build-env /app/target/productservice-shop-0.0.1-SNAPSHOT.jar ./productservice-shop-0.0.1-SNAPSHOT.jar
CMD ["/usr/bin/java", "-jar", "/app/productservice-shop-0.0.1-SNAPSHOT.jar"]
```

<table>
  <tr>
    <td><img src="https://i.postimg.cc/02CjDS6D/Schermafbeelding-2021-10-21-om-12-53-22.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/JnJ4nHVy/Schermafbeelding-2021-10-21-om-12-53-50.png" width=500 height=250></td> 
  </tr>
 </table>

## Outcome 4: Professional manner

### 1. Contribute to open source

<table>
  <tr>
    <td><img src="https://i.postimg.cc/xdC7ccz6/Create-readme.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/d1Zxjpnd/PR-readme.png" width=500 height=250></td> 
  </tr>
 </table>

