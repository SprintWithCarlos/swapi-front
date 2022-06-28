import { createContext, useReducer } from "react";
import reducer from "./reducer";
// Before fetching SWAPI we check is there is data in LocalStorage. If true initial state will be that value.
// If false then we hit the required endpoinst for the whole data
const getLocalStorage = () => {
  const planets = JSON.parse(localStorage.getItem("planets"));
  const people = JSON.parse(localStorage.getItem("people"));
  const getPlanets = planets ? planets : [];
  const getPeople = people ? people : [];
  return {
    planets: getPlanets,
    people: getPeople,
  };
};

export const initialState = {
  planets: getLocalStorage().planets,
  people: getLocalStorage().people,
  isLoading: false,
  error: false,
  dispatch: {},
};

export const SwapiContext = createContext(initialState);
export const SwapiContextProvider = ({ children }) => {
  // With useReducer hook we can change initial state dispatching actions to the state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SwapiContext.Provider
      value={{
        planets: state.planets,
        people: state.people,
        isLoading: state.isLoading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </SwapiContext.Provider>
  );
};
