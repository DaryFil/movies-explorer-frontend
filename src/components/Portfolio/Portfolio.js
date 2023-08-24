import '../Portfolio/Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return(
    <article className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
       <ul className="portfolio__links">
         <li className="portfolio__links-item">
            <Link className="portfolio__link link-hover"  to="https://github.com/DaryFil/first-project/" target="_blank"> Статичный сайт  <span className="portfolio__link-icon" /></Link>
         </li>
         <li className="portfolio__links-item">
           <Link className="portfolio__link link-hover" to="https://github.com/DaryFil/russian-travel" target="_blank"> Адаптивный сайт  <span className="portfolio__link-icon" /></Link>
         </li>
         <li className="portfolio__links-item">
           <Link className="portfolio__link link-hover" to="https://github.com/DaryFil/react-mesto-api-full-gha" target="_blank"> Одностраничное приложение  <span className="portfolio__link-icon" /></Link>
         </li>
       </ul>
    </article>
)
}

export default Portfolio;