//Actions are pure functions that return an object that always includes a type and optionally a payload

export const planetsFetchStart = () => ({
  type: "PLANETS_FETCH_START",
});
export const planetsFetchSuccess = (planets) => ({
  type: "PLANETS_FETCH_SUCCESS",
  payload: planets,
});
export const planetsFetchFailure = (error) => ({
  type: "PLANETS_FETCH_FAILURE",
  payload: error,
});
export const peopleFetchStart = () => ({
  type: "PEOPLE_FETCH_START",
});
export const peopleFetchSuccess = (people) => ({
  type: "PEOPLE_FETCH_SUCCESS",
  payload: people,
});
export const peopleFetchFailure = (error) => ({
  type: "PEOPLE_FETCH_FAILURE",
  payload: error,
});
