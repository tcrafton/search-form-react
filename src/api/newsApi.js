import { BASE_URL, handleResponse, handleError } from "./apiUtlil";

const getNewsResults = (query, page) => {
  return fetch(`${BASE_URL}query=${query}&page=${page}`)
    .then(handleResponse)
    .catch(handleError);
};

export { getNewsResults };
