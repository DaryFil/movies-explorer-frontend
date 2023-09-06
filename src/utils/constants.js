// Регулярные выражения
const EMAIL_REGEX = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
const NAME_REGEX = '[A-Za-zА-Яа-яЁё\\s\\-]+';

// Запросы
const METHOD_POST = 'POST';
const METHOD_PATCH = 'PATCH';
const METHOD_DELETE = 'DELETE';

const REG_ENDPOINT = '/signup';
const AUTH_ENDPOINT = '/signin';
const USER_ENDPOINT = '/users/me';
const MOVIES_ENDPOINT = '/movies';

  const mainApiSettings = "https://api.filmfusion.nomoreparties.co";


const moviesApiSettings = "https://api.nomoreparties.co/beatfilm-movies";
  export {
EMAIL_REGEX,
NAME_REGEX,
METHOD_POST,
METHOD_PATCH, 
METHOD_DELETE,
REG_ENDPOINT,
AUTH_ENDPOINT,
USER_ENDPOINT,
MOVIES_ENDPOINT,
moviesApiSettings,
mainApiSettings,
};