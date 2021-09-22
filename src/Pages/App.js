import React from "react";
import Account from './Account';
import Shop from "./Shop";
import "../Style/home.css";
import Navbar from '../Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./Home";


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>
  
    return (
      <Router>
        <Navbar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Shop' component={Shop} />
              <Route exact path='/account' component={Account} />
          </Switch>
      </Router>
    );
}

export default App;