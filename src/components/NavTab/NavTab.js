import React from "react";
import '../NavTab/NavTab.css';

function NavTab() {
    return (
        <section className="navtab">
            <nav className="navtab__nav">
                <ul className="navtab-links">
                    <li>
                        <a className="navtab__link link-hover" href="#about-project">О проекте</a>
                    </li>
                    <li>
                        <a className="navtab__link link-hover" href="#techs">Технологии</a>
                    </li>
                    <li>
                        <a className="navtab__link link-hover" href="#about-me">Студент</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab;