import { fetchResource } from "./utils";

export const fetchPlanets = async (state, dispatch) => {
  try {
    if (!localStorage.getItem("planets")) {
      dispatch({ type: "PLANETS_FETCH_START" });
      const planets = await fetchResource("planets");
      dispatch({ type: "PLANETS_FETCH_SUCCESS", payload: planets });
      localStorage.setItem("planets", JSON.stringify(planets));
    }
  } catch (error) {
    dispatch({ type: "PLANETS_FETCH_FAILURE", payload: error });
  }
};
export const fetchPeople = async (state, dispatch) => {
  try {
    if (!localStorage.getItem("people")) {
      dispatch({ type: "PEOPLE_FETCH_START" });
      const people = await fetchResource("people");
      dispatch({ type: "PEOPLE_FETCH_SUCCESS", payload: people });
      localStorage.setItem("people", JSON.stringify(people));
    }
  } catch (error) {
    dispatch({ type: "PLANETS_FETCH_FAILURE", payload: error });
  }
};
