import React, { useContext } from "react";
import { SwapiContext } from "../state/context";
import ListView from "./ListView";

const PeopleView = () => {
  const { dispatch, ...state } = useContext(SwapiContext);
  return (
    <div>
      <ListView data={state.people} resource={"people"}/>
    </div>
  );
};

export default PeopleView;
