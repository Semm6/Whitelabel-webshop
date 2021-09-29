# Webshop

## About the project

### Front-end

The front-end is build with React

- <a href="https://reactjs.org/">ReactJs</a>
- <a href="https://nodejs.org/en/">NodeJs</a>

### Back-end

The back-end is build with Java, Springboot and MySQL

- <a href="https://spring.io/projects/spring-boot">Springboot</a>
- <a href="https://www.mysql.com/">MySQL</a>

## Get started with this project

### Setup

To install the packages and run react application:
```
npm
npm install
npm start
```
To run springboot application
```
mvn spring-boot:run
```
To use your own database change these properties in the springboot application.properties file
```
spring.datasource.url=jdbc:mysql://localhost:3306/ProductService-webshop
spring.datasource.username=root
spring.datasource.password=root
```

### This project has 2 services and can be cloned from these repository's. Below are all the mappings

<a href="https://github.com/Semm6/ProductService-Webshop">Productservice</a>

- GET: <code>/api/products/</code>
- GET: <code>/api/product{id}/</code>
- POST: <code>/api/addProduct/</code>
- DELETE: <code>/api/delete/{id}/</code>
- PUT: <code>/api/update/</code>

<a href="https://github.com/Semm6/OrderService-Webshop">Orderservice</a>

- GET: <code>/api/orders/</code>
- GET: <code>/api/order{id}/</code>
- POST: <code>/api/addOrder/</code>
- DELETE: <code>/api/order/{id}/</code>
- PUT: <code>/api/updateOrder/</code>
