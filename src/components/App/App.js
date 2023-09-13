import "../App/App.css";
import {useEffect, useState,} from "react";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

import Preloader from "../Preloader/Preloader";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";

import {
  ERROR_CODE_400,
  ERROR_CODE_401,
  ERROR_CODE_409,
  SUCCESS_UPDATE_USER,
  ERROR_UPDATE_USER,
  ERROR_NOT_UNIQUE_EMAIL,
  ERROR_UPDATE_DATA_USER,
  INVALID_SIGNUP_DATA,
  ERROR_SIGNUP_MESSAGE,
  INVALID_AUTH_DATA,
  ERROR_AUTH,
  ERROR_SAVE_MOVIE,
  ERROR_DELETE_MOVIE,
} from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  // состояние авторизации
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [infoTitle, setInfoTitle] = useState('');
  const [profileInfoTitle, setProfileInfoTitle] = useState('');

  // сохраненные фильмы
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data.data);
          // setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          // signOut();
        });
    }
  }, [loggedIn]);

  useEffect(() => {
    function loadSavedMovies() {
      setIsLoading(true);
      mainApi
        .getSavedMovies()
        .then((data) => {
          setSavedMovies(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    if (loggedIn) {
      loadSavedMovies();
    }
  }, [loggedIn]);

  function saveMovie(movie) {
    mainApi
      .likeMovie(movie)
      .then((userMovie) => {
        setSavedMovies([userMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
        setInfoTitle(ERROR_SAVE_MOVIE);
      });
  }

  function deleteMovie(movie) {
    console.log(movie)
    const movieToDelete = savedMovies.find(
      (m) => movie.id === m.movieId || movie.movieId === m.movieId
    );
    mainApi
      .deleteMovie(movieToDelete._id)
      .then((removedMovie) => {
        setSavedMovies((state) =>
          state.filter((item) => item._id !== removedMovie._id)
        );
      })
      .catch((err) => {
        console.log(err);
        setInfoTitle(ERROR_DELETE_MOVIE);
      });
  }

  function handleSignUp(data) {
    setIsLoading(true);
    mainApi
      .signUp(data)
      .then((res) => {
        if (res) {
          setInfoTitle(SUCCESS_UPDATE_USER);
          handleSignIn(data);
        }
      })
      .catch((err) => {
        if (err === ERROR_CODE_409) {
          setInfoTitle(ERROR_NOT_UNIQUE_EMAIL);
        } else if (err === ERROR_CODE_400) {
          setInfoTitle(INVALID_SIGNUP_DATA);
        } else {
          setInfoTitle(ERROR_SIGNUP_MESSAGE);
        }
        console.log(err);
        // setLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignIn(data) {
    setIsLoading(true);
    mainApi
      .signIn(data)
      .then((data) => {
        if (data.token) {
          setLoggedIn(true);
          navigate("/movies", {replace: true});
        }
      })
      .catch((err) => {
        if (err === ERROR_CODE_401) {
          setInfoTitle(INVALID_AUTH_DATA);
        } else {
          setInfoTitle(ERROR_AUTH);
        }
        console.log(err);
        setLoggedIn(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleUserUpdate(userData) {
    // setIsLoading(true);
    mainApi
      .updateUserInfo(userData)
      .then((data) => {
        setCurrentUser(data.data);
        setProfileInfoTitle("Данные успешно обновлены");
      })
      .catch((err) => {
        if (err === ERROR_CODE_409) {
          setProfileInfoTitle(ERROR_NOT_UNIQUE_EMAIL);
        } else {
          setProfileInfoTitle(ERROR_UPDATE_USER);
        }
        console.log(err);
        setProfileInfoTitle(ERROR_UPDATE_DATA_USER);
      })
      // .finally(() => {
      //   // setIsLoading(false);
      // });
  }

  function signOut() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/", {replace: true});
  }

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.checkToken(jwt)
        .then(() => {
          setLoggedIn(true);
          navigate(location.pathname, {replace: true});
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
    
          <div className="root">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Header loggedIn={loggedIn}/>
                    <Main/>
                    <Footer/>
                  </>
                }
              />

              <Route
                path="/movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn} isLoading={isLoading}>
                    <>
                      <Header
                        loggedIn={loggedIn}
                      />
                      <Movies
                        loggedIn={loggedIn}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        savedMovies={savedMovies}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                      />
                      <Footer/>
                    </>
                  </ProtectedRoute>
                }
              />

              <Route
                path="/saved-movies"
                element={
                  <ProtectedRoute loggedIn={loggedIn} isLoading={isLoading}>
                    <>
                      <Header/>
                      <SavedMovies
                        loggedIn={loggedIn}
                        isLoading={isLoading}
                        saveMovie={saveMovie}
                        deleteMovie={deleteMovie}
                        savedMovies={savedMovies}
                      />
                      <Footer/>
                    </>
                  </ProtectedRoute>
                }
              />

              <Route path="/profile"
                     element={
                       <ProtectedRoute loggedIn={loggedIn} isLoading={isLoading}>
                         <Profile
                           loggedIn={loggedIn}
                           handleUserUpdate={handleUserUpdate}
                           isLoading={isLoading}
                           signOut={signOut}
                           infoTitle={profileInfoTitle}
                           setInfoTitle={setProfileInfoTitle}
                     />
                       </ProtectedRoute>
                     }
              />
              <Route path="/signup"
                     element={<Register
                       loggedIn={loggedIn}
                        handleSignUp={handleSignUp}
                       isLoading={isLoading}
                       infoTitle={infoTitle}
                     />
                     }
              />
              <Route path="/signin"
                     element={<Login
                       loggedIn={loggedIn}
                       handleSignIn={handleSignIn}
                       isLoading={isLoading}
                       infoTitle={infoTitle}
                     />
                     }
              />
              <Route path="*"
                     element={<PageNotFound/>}
              />
            </Routes>
          </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
