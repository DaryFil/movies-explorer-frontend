import {
    mainApiSettings,
    METHOD_POST,
    METHOD_PATCH,
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
  
