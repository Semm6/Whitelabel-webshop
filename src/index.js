import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Style/index.css';
import App from './Pages/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN; //import domain from env file
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; //import clientid from env file

ReactDOM.render(
  <Auth0Provider //import auth0 provider for the whole application
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();