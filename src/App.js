import { useContext, useEffect } from "react";
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
    <div className="App">
      {state.error && <p>A error happened, try again</p>}
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <pre>{JSON.stringify(state.planets)}</pre>
          <pre>{JSON.stringify(state.people)}</pre>
        </>
      )}
    </div>
  );
}

export default App;
