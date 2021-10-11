# Portfolio S3

This project is created with React and springboot.

###### 1. Why am i using React for this project?

The reason i use React for this project is because i want to learn it for the future. 1 goal of mine is too learn mobile development and react native is a good thing to master if i wanna go that route one day. I can acomplish this goal easier if i used React before. So this is my main reason to use React in this semester.

###### 2. SQl or NoSQL database?

By doing some research about SQl or NoSQL i came to a conclusion. For my application (webshop) the best choice is to use a SQL-database. This is a good choice because my data is structured. A good project to have a NoSQL database is for example twitter where your data is all random. The plan for this project is to make 3 databases each related to 1 thing. So for example i would have 1 database for products only. This makes it single responsibility too. 


# Start of the project

#### User stories

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


# Learning outcomes

These are all the learning outcomes i need to acomplish by the end of the semester.

## Outcome 1: You design and build user-friendly, full stack web applications

### 1. Product service: show products with an api call. 

As you can see on the pictures there are a couple of products shown. These products are coming from the productservice API that is connected to the MySQL database.

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
  </tr>
 </table>
 
sources: 

- [Docs Auth0](https://auth0.com/docs/quickstart/spa/react)
- [Video from codestacker](https://www.youtube.com/watch?v=MqczHS3Z2bc)

## Outcome 2: Tooling and methodology

## Outcome 3: Design and implement (release process)

### 1. Docker containers

Below here you can see the docker containers i made for my project. These are all the microservices i am currenlty using for my webshop. Now that i made these containers i can deploy them easily. Further benefits are: 

- The ability to run multiple processes and apps separately from one another to make better use of my infrastructure.
- Container tools, including Docker, provide an image-based deployment model. This makes it easy to share an application, or set of services, with all of their     dependencies across multiple environments
- Docker automates deploying the application (or combined sets of processes that make up an app) inside this container environment.

Here is also a quick step by step tutorial for making a Docker container in springboot (terminal)

1. Create a docker file with these properties:

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

## Outcome 4: Professional manner

