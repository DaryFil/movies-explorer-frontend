import React from "react";
import { Link } from "react-router-dom";

import "../Footer/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
        <div className="footer__info">
        <p className="footer__copyright">© {new Date().getFullYear()} </p>
        <ul className="footer__links">
          <li>
            <Link
              className="footer__navigation-link link-hover"
              to="https://practicum.yandex.ru/"
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              className="footer__navigation-link link-hover"
              to="https://github.com/DaryFil"
              target="_blank"
            >
              Github
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
