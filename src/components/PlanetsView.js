import React from "react";
import ListView from "./ListView";

const PlanetsView = ({ data }) => {
  return (
    <div>
      <ListView data={data} />
    </div>
  );
};

export default PlanetsView;
