import React from "react";
import { Component } from "react";
import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
      return (
        <div>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Shop">Shop</Link>
        </li>
        <li>
          <Link to="/Account">Account</Link>
        </li>
      </div>
    );
  }
}

export default Navbar;