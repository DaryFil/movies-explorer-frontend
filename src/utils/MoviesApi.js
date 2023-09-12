import { moviesApiSettings } from "./constants";

export const getMovies = () => {
  return fetch(`${moviesApiSettings}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  });
};