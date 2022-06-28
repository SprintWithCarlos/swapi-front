import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SwapiContextProvider } from "./state/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanetsView from "./components/PlanetsView";
import ResidentDetailView from "./components/ResidentDetailView";
import PlanetDetailView from "./components/PlanetDetailView";
import PeopleView from "./components/PeopleView";

const root = ReactDOM.createRoot(document.getElementById("root"));
// ContextProvider at root to make state available to all children components through useContext hook
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/planets" element={<PlanetsView />} />
          <Route path="/people" element={<PeopleView />} />
          <Route
            path="/planets/:id"
            element={<PlanetDetailView resource={"planets"} />}
          />
          <Route
            path="/people/:id"
            element={<ResidentDetailView resource={"people"} />}
          />
        </Route>
      </Routes>

      <SwapiContextProvider></SwapiContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
