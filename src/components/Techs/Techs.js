import React from "react";
import '../Techs/Techs.css';

function Techs() {
    return (
        <section className="techs" id="techs">
            <div className="techs__container">
                <h3 className="techs__title">Технологии</h3>
                <div className="techs__info">
                <span className="techs__count">7 технологий</span>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном&nbsp;проекте.</p>
                <ul className="techs__list">
                    <li className="techs__name">HTML</li>
                    <li className="techs__name">CSS</li>
                    <li className="techs__name">JS</li>
                    <li className="techs__name">React</li>
                    <li className="techs__name">Git</li>
                    <li className="techs__name">Express.js</li>
                    <li className="techs__name">mongoDB</li>
                </ul>
            </div>
            </div>
        </section>
    )
}

export default Techs;