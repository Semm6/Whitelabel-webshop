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
        <h1>Home page</h1>
  </div>
);



export default App;