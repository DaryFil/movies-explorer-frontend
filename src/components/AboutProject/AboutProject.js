import React from "react";
import '../AboutProject/AboutProject.css';

function AboutProject() {
    return (
        <section className="about-project" id="about-project">
            <div className="about-project__container">
                <h2 className="about-project__title">О проекте</h2>
                <div className="about-project__info">
                    <div className="about-project__info-item">
                        <h3 className="about-project__info-title">Дипломный проект включал 5 этапов</h3>
                        <p className="about-project__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about-project__info-item">
                        <h3 className="about-project__info-title">На выполнение диплома ушло 5 недель</h3>
                        <p className="about-project__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>

                <div className="about-project__time-info">

                     <div className="about-project__interval">
                        <div className="about-project__time-line">1 неделя</div>
                        <span className="about-project__technology">Back-end</span>
                    </div>
                    <div className="about-project__interval">
                        <div className="about-project__time-line about-project__time-line_front">4 недели</div>
                        <span className="about-project__technology">Front-end</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default AboutProject;
