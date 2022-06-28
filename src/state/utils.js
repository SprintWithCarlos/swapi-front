/* eslint-disable no-loop-func */
const baseURL = "https://swapi.dev/api";
// SWAPI is paginated, there is no direct way to get all resources. Current count is 60 for planets and 82 for people
// We need a function that loops through all pages, stores all items in a new arreay, adding an id to the current schema

export const fetchResource = async (resource) => {
  const array = [];
  let page = 1;
  let next = 1;
  let id = 1;

  while (next !== null) {
    const res = await fetch(`${baseURL}/${resource}/?page=${page}`);
    const data = await res.json();
    const { results } = await data;
    const newArray = results?.map((item) => {
      const newItem = {
        id,
        ...item,
      };
      id += 1;
      return newItem;
    });
    array.push(...newArray);
    page += 1;
    next = data.next;
  }

  return array;
};
