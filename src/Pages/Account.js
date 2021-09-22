import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';

const Account = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
      isAuthenticated && ( //see if user is authenticated (if user is logged in show data)
        <div>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <JSONPretty data = {user} />
            {/* {JSON.stringify(user, null, 2)} */}
        </div>
      )
    )
}

export default Account