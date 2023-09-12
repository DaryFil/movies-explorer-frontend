// Регулярные выражения
const EMAIL_REGEX = '^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]{2,4}$';
const NAME_REGEX = '[A-Za-zА-Яа-яЁё\\s\\-]+';

// ошибки запросов
const ERROR_CODE_400 = 400;
const ERROR_CODE_401 = 401;
const ERROR_CODE_409 = 409; 

// сообщения запросов
const ERROR_UPDATE_USER = 'При обновлении профиля произошла ошибка.';
const ERROR_NOT_UNIQUE_EMAIL = 'Пользователь с таким e-mail уже существует.';
const SUCCESS_UPDATE_USER = 'Данные успешно обновлены.';
const ERROR_UPDATE_DATA_USER = 'Ошибка при обновлении данных.';
const INVALID_SIGNUP_DATA = 'Переданы некорректные данные при регистрации';
const ERROR_SIGNUP_MESSAGE = 'При регистрации пользователя произошла ошибка.';
const INVALID_AUTH_DATA = 'Вы ввели неправильный логин или пароль.';
const ERROR_AUTH = 'При авторизации пользователя произошла ошибка.';
const ERROR_SAVE_MOVIE = 'Фильм не сохранился.';
const ERROR_DELETE_MOVIE = 'Фильм не удалён.';
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

const SHORT_DURATION_MOVIES = 40;
const CARDS_DESKTOP_QUANTITY = 12;
const CARDS_TABLET_QUANTITY = 8;
const CARDS_MOBILE_QUANTITY = 5;
const DESKTOP_WIDTH = 1280;
const TABLET_WIDTH = 892;
const MOBILE_WIDTH = 320


const CARDS_MORE_DESKTOP = 3;
const CARDS_MORE_MOBILE = 2;
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
  SHORT_DURATION_MOVIES,
  CARDS_DESKTOP_QUANTITY,
  CARDS_TABLET_QUANTITY,
  DESKTOP_WIDTH,
  TABLET_WIDTH,
  CARDS_MOBILE_QUANTITY,
  CARDS_MORE_DESKTOP,
  CARDS_MORE_MOBILE,
  MOBILE_WIDTH,
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
  ERROR_DELETE_MOVIE
};
