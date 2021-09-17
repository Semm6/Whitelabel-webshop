import React from "react";
import Account from './Account';
import Shop from "./Shop";
import "../Style/home.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AllUsers from "./AllUsers";
import Login from "./Login";
import Register from "./Register";


function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/account' component={Account} />
              <Route exact path='/shop' component={Shop} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/users' component={AllUsers} />
          </Switch>
        </div>
      </Router>
    );
}


//Home page from here 

const Home = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="">Home</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="Shop">Shop</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="Login">Login</a>
            </li>
          </ul>
        </div>
    </nav>
  </div>
);



export default App;