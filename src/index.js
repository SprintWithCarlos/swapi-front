import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SwapiContextProvider } from "./state/context";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ContextProvider at root to make state available to all children components through useContext hook
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <SwapiContextProvider></SwapiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
