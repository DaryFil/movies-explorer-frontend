import '../PageNotFound/PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <section className="not-found">
      <div className="not-found__info">
        <h3 className="not-found__title">404</h3>
        <p className="not-found__subtitle">Страница не найдена</p>
      </div>
      <button type="button" className="not-found__button button-hover" onClick={() => navigate(-1)}>Назад</button>
    </section>
  );
};

export default PageNotFound;