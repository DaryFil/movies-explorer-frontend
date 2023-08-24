import '../AboutMe/AboutMe.css';
import React from 'react';
import studentPhoto from '../../images/studentPhoto.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
          <div className="about-me__info">
             <h3 className="about-me__title">Студент</h3>
             <div className="about-me__border"></div>
             <div className="about-me__container-info">
                   <div className="about-me__container-text">
                       <h4 className="about-me__name">Дарья</h4>
                       <p className="about-me__subtitle">Фронтенд-разработчик, 34 года</p>
                       <p className="about-me__information">Родилась и живу в Воронеже. Всегда интересовали IT-технологии, поэтому приняла решение освоить новую специальность и пошла учиться на вэб-разработчика.</p>
                       <a className="about-me__github-link link-hover" href="https://https://github.com/DaryFil" target="_blank">Github</a>
                   </div>
                 <img className="about-me__photo" alt="Моя фотография" src={studentPhoto } />
            </div>
                 <Portfolio />
         </div>
     </section>
    )
}
export default AboutMe;

