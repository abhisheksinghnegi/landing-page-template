import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import configData from "./config.json"
import 'bootstrap/dist/css/bootstrap.min.css';

const providerConfig = {
  domain: configData.domain,
  clientId: configData.clientId,
  audience: configData.audience,
  redirectUri: window.location.origin,
  useRefreshTokens: true,
  cacheLocation: "localstorage"
};
ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider {...providerConfig}>
      <App />
    </Auth0Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
