import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-nuwvujb4.us.auth0.com"
    clientId="GQaMgK1IauccUMhC8ZEkyFw7nF9bah5A"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
