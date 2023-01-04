import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-01gsmjnb7fd5w70o.us.auth0.com"
      clientId="uWb0ItqLEZLsQdRxIBVhFVsXFtdNeuI0"
      redirectUri={window.location.origin}
      audience="https://my-course-project-production.up.railway.app/"
      scope="regular"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
