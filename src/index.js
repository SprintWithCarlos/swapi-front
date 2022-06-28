import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { SwapiContextProvider } from "./state/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ContextProvider at root to make state available to all children components through useContext hook
root.render(
  <React.StrictMode>
    <SwapiContextProvider>
      <App />
    </SwapiContextProvider>
  </React.StrictMode>
);
