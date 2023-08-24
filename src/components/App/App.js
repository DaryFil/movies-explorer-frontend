import '../App/App.css';
import { Route, Routes, } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  return (
    <div className="root">
      <Routes>
        <Route path='/' element={
          <>
            <Header />
             <Main />
            <Footer /> 
          </>
        } />

        <Route path='/movies' element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
         } />
         
        <Route path='/saved-movies' element={
          <>
            <Header />
            <SavedMovies />
            <Footer />
          </>
        } />
      
        <Route path='/profile' element={
          <Profile />
         } />  

        <Route path='/sign-up' element={
          <Register />
       } />  

        <Route path='/sign-in' element={
          <Login />
        } />  

        <Route path='/not-found' element={
          <PageNotFound />
        } />  

    </Routes >
  </div >
  );
}

export default App;