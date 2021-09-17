import React from "react";
import logo from '../images/food.png'
import "../Style/login.css";


function Login() {
    return (

      <body>
        <div className="page">

            <div className="login-header">
              <img src={logo} className="logo" alt="logo"/>
              <h1 className="header">Login</h1>
            </div>

            <div className="loginform">
              <h6>Email</h6>
              <input type="text"></input>
            </div>

            <div className="loginform">
              <h6>Password</h6>
              <input type="text"></input>
            </div>

            <div className="loginform">
              <button>Submit</button>
            </div>
        </div>
      </body>
    )
}

export default Login;