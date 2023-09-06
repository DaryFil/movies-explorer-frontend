import "../App/App.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

import CurrentUserContext  from "../../contexts/CurrentUserContext";
import { mainApiSettings } from "../../utils/constants";
// import mainApi from '../../utils/MainApi';
import * as mainApi from "../../utils/MainApi";

function App() {
  const navigate = useNavigate();
   // данные пользователя
  const [currentUser, setCurrentUser] = useState({});
  // состояние авторизации
  const [loggedIn, setLoggedIn] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  
  const [infoTitle, setInfoTitle] = useState("Success");


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setCurrentUser(data.data);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          signOut();
        });
    } else {
      signOut();
    }
  }, [loggedIn]);


  function handleSignUp(data) {
    setIsLoading(true);
    mainApi
      .signUp(data)
      .then((res) => {
        if (res) {
          setInfoTitle("Вы успешно зарегистрировались!");
                   handleSignIn(data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setInfoTitle("Не получилось зарегистрироваться! Попробуйте ещё раз.");
      
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
          navigate("/movies", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setInfoTitle("Не получилось войти! Попробуйте ещё раз");
     
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  function handleUserUpdate(userData) {
    setIsLoading(true);
    mainApi
      .updateUserInfo(userData)
      .then((data) => {
        
        setCurrentUser(data.data);
        setInfoTitle("Данные успешно обновлены!");
          })
      .catch((err) => {
        console.log(err);
        setInfoTitle("Ошибка при обновлении данных! Попробуйте ещё раз.");
           })
      .finally(() => {
        setIsLoading(false);
            });
  }

  function signOut() {
    localStorage.clear();
    setCurrentUser({});
    setLoggedIn(false);
    navigate("/", { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header loggedIn={loggedIn}/>
              <Main loggedIn={loggedIn} />
              <Footer />
            </>
          }
        />

        <Route
          path="/movies"
          element={
            <>
              <Header />
              <Movies
                loggedIn={loggedIn}
                  isLoading={isLoading} />
              <Footer />
            </>
          }
        />

        <Route
          path="/saved-movies"
          element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          }
        />

        <Route path="/profile" 
        element={<Profile 
        loggedIn={loggedIn}
        handleUserUpdate={handleUserUpdate}
        isLoading={isLoading}
        signOut={signOut}
        />
      }
        />

        <Route path="/signup" 
        element={<Register 
         loggedIn={loggedIn}
         handleSignUp={handleSignUp}
         isLoading={isLoading}
         />
         }
          />

        <Route path="/signin"
         element={<Login 
         loggedIn={loggedIn}
         handleSignIn={handleSignIn}
         isLoading={isLoading}
         />
         }
          />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;


