import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const audience = import.meta.env.VITE_AUTH0_AUDIENCE;


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
	      domain={domain}
	      clientId={clientId}
	      authorizationParams={{
	        audience: audience,
	        redirect_uri: window.location.origin,
	      }}
	    >
	      <App />
	    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);