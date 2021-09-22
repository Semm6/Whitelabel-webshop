import React from "react";
import { Component } from "react";
import logo from '../images/food.png'
import "../Style/navbar.css";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

class Navbar extends Component {
    render() {
      return (
          <ul>
            <img className="logo" src={logo} alt="logo" />
            <li><a className="link" href="/">Home</a></li>
            <li><a className="link" href="/Shop">Shop</a></li>
            <li><a className="link" href="/Account">Account</a></li>
            <li className="login"><a><LoginButton/></a></li>
            <li className="login"><a><LogoutButton/></a></li>
          </ul>
      );
    }
}

export default Navbar;