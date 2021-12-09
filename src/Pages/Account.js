import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../Style/account.css";

const Account = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( //see if user is authenticated (if user is logged in show data)
      <div>
        <h1>Account information</h1>

        <div className="picture">
          <img src={user.picture} alt="userpic" />
        </div>

        <h3>{user.name}</h3>
        <a>{user.email}</a>
        <a>{user.locale}</a>
      </div>
    )
  );
};

export default Account;
