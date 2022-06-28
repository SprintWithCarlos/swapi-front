import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

import { fetchPlanets, fetchPeople } from "./state/apiCalls";
import { SwapiContext } from "./state/context";

// Using useContext we can fetch and store at first render
function App() {
  const { dispatch, ...state } = useContext(SwapiContext);

  useEffect(() => {
    fetchPlanets(state, dispatch);
    fetchPeople(state, dispatch);
  }, []);
  return (
    <div >
      {state.error && <p>A error happened, try again</p>}
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <nav>
            <Link to={"/planets"}>Planets</Link> | 
            <Link to={"/people"}> People</Link>
          </nav>
          <Outlet className="Outlet"/>
          {/* <PlanetsView data={state.planets} />
          <ListView data={state.people} /> */}
          {/*  <pre>{JSON.stringify(state.planets)}</pre>
          <pre>{JSON.stringify(state.people)}</pre>
          */}
        </>
      )}
    </div>
  );
}

export default App;
