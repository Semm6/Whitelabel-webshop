# Portfolio S3

This project is created with React and springboot.

#### 1. Why am I using React for this project?

The reason I use React for this project is because I want to learn it for the future. A goal of mine is to learn mobile development and react native. These are good things to master if I wan't to go that route one day. If I use react now, then this goal will be eassier to achieve. So this is my main reason to use React in this semester.

#### 2. SQl or NoSQL database?

By doing some research about SQl or NoSQL I came to a conclusion. The best choice for my application (webshop) is to use a SQL-database. This is a good choice because my data is structured. A good project to have a NoSQL database is for example twitter, where your data is all random. The plan for this project is to make 3 databases each related to 1 thing. So for example I would have one database for products only. This makes it single responsibility too. 


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
 
In the image below you can see the C1 model. In this model you can see an overview of the application. I'm making a webshop with an external login service. This is displayed as login service. In the C1 model there are no details required.
 
 <img src="https://i.postimg.cc/kMV2RpMz/C1.png" width=750 height=500>
 
 #### C2
 
In this C2 model you can see that a customer starts by getting on the website. After this he can watch products and order via the 2 services I made for this. If he wants to order he uses the external login service on the top right. 
  
<img src="https://i.postimg.cc/hGfBZNYq/C2.png" width=750 height=500>
 
 #### C3
 
In the C3 model we are diving deeper in the application. For example I picked the productservice for now. If a customer makes a request it goes through a controller that handles it. With that there is a database that will store all the data.
 
 <img src="https://i.postimg.cc/XqdDz3j9/C4-model-3-V2-webshop.png" width=750 height=500>

# Learning outcomes

These are all the learning outcomes I need to acomplish by the end of the semester.

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

With this service the website is able to login and register users. I implemented this because I want users to eventually make orders with their own accounts. When the user is logged in on the website he is also able to see his own account information. Both of these functionalities are shown on the image below.

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

When the client makes a request on the webshop, the discovery service will make sure that you can find the microservices in your architecture. It's good to understand that this discovery service knows where the services are. And also its good to understand that all these microservices that want to be discovered will be saying to the discovery service "Let them know I'm here to be used". I can make sure that the these services can be discoverd by adding the code below to the startup file in the springboot application.

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

A good way to describe an API-Gateway is an entry point for all clients. You can add different services in the YML file to make sure they all run through the gateway. This gateway also makes it very easy for requests because all the services go through one port now (mine runs on 9292). You can see this on the image below. If I want to add some kind of security i am able to implement authorization  when a client is making requests for example.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/bv8vbRCm/API-Gateway-request-on-9192-port.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/1tdPW0Bh/YML-file.png" width=500 height=250></td> 
  </tr>
 </table>

sources:

- [Java brains](https://www.youtube.com/watch?v=1vjOv_f9L8I&t=5s&ab_channel=JavaBrains)
- [Daily code buffer](https://www.youtube.com/watch?v=BnknNTN8icw&t=3826s&ab_channel=DailyCodeBuffer)

### 5. Auth0 Poc in Swift

Because I'm interested in Swift for the upcoming semester I made a POC to see if I could use Auth0 with a Swift application. The repository for this is mentioned below.

[Swift Auth0 Poc repo](https://github.com/Semm6/Swift-Auth0-poc)

<table>
  <tr>
    <td><img src="https://www.linkpicture.com/q/Auth0-login-screen_1.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/Y0FW5Dk2/Auth0-logged-in.png" width=500 height=250></td> 
  </tr>
 </table>


## Outcome 2: Tooling and methodology

### 1. Unit and integration tests

For this learning outcome I made some unit and integration tests. This will verify that my application is doing what it's supposed to do. Also a good benefit of testing is preventing bugs and helps with the quality of the code. On the images below you can see two sort of tests I made: unit and integration tests. Here is some explanation on both of these tests. 

<code>Unit testing:</code> This is a testing technic that tests individual units of code (methods). So for example in my application, one test will only test the method that gives me all the products, and another may test the method that can create a product. It's possible for the developer to use mockobjects to simulate behaviors of objects. This is helpfull when you are testing because you can use fake objects instead of the real objects from your project.

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

After making the tests above I needed to automate this by testing everytime when I push. This makes sure the code is always tested everytime I make a new change. The quality of the code

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
 
### 3. Testing with H2 database

A good reason to use an H2 database is because it can be configured to run as in-memory database. The benefits of this are that it can create a clean database, execute unit tests and then delete the database very fast. If you would create and delete a physical database at each build it would consume much time. On the images below you can see that i setup some properties and that i run the unit tests with the H2 database. Also the tests run very fast

<table>
  <tr>
    <td><img src="https://i.postimg.cc/qqYnnPWM/H2-db-properties.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/7P9R54LW/Running-tests-with-H2.png" width=500 height=250></td> 
  </tr>
 </table>
 
 sources: 

- [Amigoscode](https://www.youtube.com/watch?v=Geq60OVyBPg&ab_channel=Amigoscode)

### 4. Exception testing

On the images below you can see that I made some exception tests. The reason I made these tests is because I want to be able to see if my exceptions work if anything goes wrong. This exception is custom made and you can call this exception where you want.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/wTzqpLrg/Excepion-method.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/L5tmP8nc/Exception-testing.png" width=500 height=250></td> 
  </tr>
  <tr>
    <td><img src="https://i.postimg.cc/cJPW5nYq/Exception-class.png" width=500 height=250></td>
    <td><img src="https://i.postimg.cc/v8ry3DZj/Exception-controller.png" width=500 height=250></td> 
  </tr>
 </table>
 
### 5. Code review

My fellow student [@JoviSimons](https://github.com/JoviSimons) did a code review for me. He reviewed the PR for merging the fixed bug I had when pushing the H2 database to GitHub. As you can see on the image below he wrote a comment about it. He is also assigned to this PR and a contributer because he reviewed for me!

<img src="https://i.postimg.cc/ZK0ngMbr/Code-review.png">

## Outcome 3: Design and implement (release process)

### 1. Docker containers

Below here you can see the docker containers I made for my project. These are all the microservices I am currenlty using for my webshop. Now that I made these containers i can deploy them easily. Further benefits are: 

- The ability to run multiple processes and apps separately from one another to make better use of my infrastructure.
- Container tools, including Docker, provide an image-based deployment model. This makes it easy to share an application, or set of services, with all of their dependencies across multiple environments
- Docker automates deploying the application (or combined sets of processes that make up an app) inside this container environment.

Here is also a quick step by step tutorial for making a Docker container in springboot (terminal)

1. Create a docker file in your application with these properties:

```
FROM openjdk:11
EXPOSE <PORT>
ADD target/<PROJECT_NAME>.jar <PROJECT_NAME>.jar
ENTRYPOINT ["java", "-jar", "/<PROJECT_NAME>"]
```
2. Get the jar file by using <Code>MVN package</Code> in the terminal
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

On the images below you can see that I created a README file for an open source project. This is the first time I ever contributed. Before I did this I looked up some information about contributing to projects and a proper way of doing this. I started simple by creating this README and then making a pull request. The next day I got a message that my contribution had bin merged to the master. So from now on I can say that I made a small piece for this project even if it's just a file. This semester and in the future I will be contributing a lot more.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/xdC7ccz6/Create-readme.png" width=500 height=250></td> 
    <td><img src="https://i.postimg.cc/d1Zxjpnd/PR-readme.png" width=500 height=250></td> 
  </tr>
 </table>
 
 sources: 
 
 - [Find Github repos to contribute to](https://www.youtube.com/watch?v=W7AewHnxMig&t=540s&ab_channel=BenKadel)
 - [Complete guide to open source](https://www.youtube.com/watch?v=yzeVMecydCE&ab_channel=freeCodeCamp.org)


### 2. Project board

All the features on the left are issues made by me to track my progress and for new contributers to see what they can do if they want to contribiute. In every feature there are a couple of checkboxes to show what needs to be done to complete this feature. On the right image below you can see that I linked a pull request to an issue. This way new contributers and myself are able to see the status of this issue and the issue can be closed when its merged.

To validate that this project board is clear i asked <a href="https://github.com/jellehuibregtse">@JelleHuibregste</a> to review it. He gave me some good feedback on it.

<table>
  <tr>
    <td><img src="https://i.postimg.cc/MGXsNHwD/Project-board.png"/></td> 
    <td><img src="https://i.postimg.cc/3WQTv4NL/Link-PR-to-issue.png"/></td> 
  </tr>
 </table>

### 3. GitHub flow

In these and the upcoming project I will be using what's called the GitHub flow. This means that i am working with a branch-based workflow. This also works very good when you're building a project with a group of developers. Below I made a small step by step guide on how the GitHub flow works.

1. Create a branche
2. Make changes
3. Create a pull request
4. Let someone review the pull request
5. Merge your pull request
6. Delete your branche

On the image below you can see this flow very well.

<img src="https://i.postimg.cc/rwwdRDGc/Github-flow.png" width="485"/>

### 4. Research

For this semester i also did 2 researches with other students. We made these in the [Open Resource Dojo](https://github.com/Open-Research-Dojo). The dojo is a good place to save them because its available for everyone. So when new people join the dojo they can contribiute or add new researches. Remember that these researches are never done because they can always be improved! We made sure that we had a good workflow by using issues, PR's, branches and a project board to monitor the process (Github flow). So when new people want to contribiute they can see what is already made/worked on. We set this up at the beginning and it worked out very good for all 3 of us! Below i will place links to both of the researches we did.

- [Secure webservice 0Auth2](https://github.com/Open-Research-Dojo/secure-webservice-0Auth2)

In this research i researched question 2.

- [Start up your own business](https://github.com/Open-Research-Dojo/start-up-your-business)

In this research i made question 1. This research is about starting up a business. in R10 we made a business canvas together with the teacher. This canvas is about a business we want to start together. You can read the research in the link above but i will leave the canvas here below.

<img src="https://i.postimg.cc/1XH3tdxx/Business-model-canvas-JDS-development.png" width="500px"/>
