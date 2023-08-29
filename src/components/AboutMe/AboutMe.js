import '../AboutMe/AboutMe.css';
import React from 'react';
import studentPhoto from '../../images/studentPhoto.jpg';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {
    return (
        <section className="about-me" id="about-me">
          <h2 className="about-me__title">Студент</h2>
          <div className="about-me__container-info">
            <div className="about-me__container-text">
                <h3 className="about-me__name">Дарья</h3>
                <p className="about-me__subtitle">Фронтенд-разработчик, 34 года</p>
                <p className="about-me__information">Родилась и живу в Воронеже. Всегда интересовали IT-технологии, поэтому приняла решение освоить новую специальность и пошла учиться на вэб-разработчика.</p>
                <a className="about-me__github-link link-hover" href="https://github.com/DaryFil" target="_blank">Github</a>
            </div>
                <img className="about-me__photo" alt="фотография студента Яндекс Практикума Дарьи Филиппских" src={studentPhoto } />
            </div>
                 <Portfolio />
         
     </section>
    )
}
export default AboutMe;
