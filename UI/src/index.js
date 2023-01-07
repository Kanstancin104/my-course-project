import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { authDomain, authClientID, authAudience } from "./const";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={authDomain}
      clientId={authClientID}
      redirectUri={window.location.origin}
      audience={authAudience}
      scope="regular admin"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
