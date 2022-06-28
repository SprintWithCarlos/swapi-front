// The reducer is a function that will change state according with the action dispatched
// "PLANETS_FETCH_START" will change isLoading property value (boolean) at initialState
// from its default value (false) to true and keep intact the rest of the state
// There is also possible to change the stare through action payload, which we will do in

import { initialState } from "./context";

// async calls to SWAPI
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLANETS_FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "PLANETS_FETCH_SUCCESS":
      return {
        ...state,
        planets: action.payload,
        isLoading: false,
      };
    case "PLANETS_FETCH_FAILURE":
      return {
        ...state,
        planets: [],
        isLoading: false,
        error: action.payload,
      };
    case "PEOPLE_FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "PEOPLE_FETCH_SUCCESS":
      return {
        ...state,
        people: action.payload,
        isLoading: false,
      };
    case "PEOPLE_FETCH_FAILURE":
      return {
        ...state,
        people: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
