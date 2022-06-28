import React, { useContext } from "react";
import { SwapiContext } from "../state/context";
import ListView from "./ListView";

const PlanetsView = () => {
  const { dispatch, ...state } = useContext(SwapiContext);
  return (
    <div>
      <ListView data={state.planets}resource={"planets"}/>
    </div>
  );
};

export default PlanetsView;
