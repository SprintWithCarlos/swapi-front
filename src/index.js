import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SwapiContextProvider } from "./state/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsView from "./components/PlanetsView";
import DetailView from "./components/DetailView";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ContextProvider at root to make state available to all children components through useContext hook
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/planets" element={<PlanetsView />} />
        <Route
          path="/planets/:id"
          element={<DetailView resource={"planets"} />}
        />
      </Routes>

      <SwapiContextProvider></SwapiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
