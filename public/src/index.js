import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="pastorcare.us.auth0.com"
      clientId="UUpD6sLa734cMYHTDu40wNfxRB2LGEDi"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
