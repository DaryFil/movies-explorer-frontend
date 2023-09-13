import {
    mainApiSettings,
    METHOD_POST,
    METHOD_PATCH,
    METHOD_DELETE,
//     METHOD_DELETE,
  } from '../utils/constants';

  const checkResponse = (res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  };

  export const signUp = (data) => {
    return fetch(`${mainApiSettings}/signup`, {
      method: METHOD_POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };

  export const signIn = (data) => {
    return fetch(`${mainApiSettings}/signin`, {
      method: METHOD_POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password: data.password, email: data.email }),
    })
      .then(checkResponse)
      .then((data) => {
        localStorage.setItem("jwt", data.token);
        return data;
      });
  };

  export const getUserInfo = () => {
    return fetch(`${mainApiSettings}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };

  export const updateUserInfo = (data) => {
    return fetch(`${mainApiSettings}/users/me`, {
      method: METHOD_PATCH,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ name: data.name, email: data.email }),
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };
  

  export const getSavedMovies = () => {
    return fetch(`${mainApiSettings}/movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };

  export const likeMovie = (data) => {
    return fetch(`${mainApiSettings}/movies`, {
      method: METHOD_POST,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image:  `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
    }).then(checkResponse);
  };

  export const deleteMovie = (movieId) => {
    return fetch(`${mainApiSettings}/movies/${movieId}`, {
      method: METHOD_DELETE,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(checkResponse)
      .then((data) => {
        return data;
      });
  };

  export const checkToken = (jwt) => {
return fetch(`${mainApiSettings}/users/me`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
  },
})
  .then(checkResponse)
    };