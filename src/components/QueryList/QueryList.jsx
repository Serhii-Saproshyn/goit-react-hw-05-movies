import { Link, useLocation } from 'react-router-dom';
import css from 'components/QueryList/QueryList.module.css';
import noImage from 'img/noimage.jpeg';

const IMG_URL = 'https://image.tmdb.org/t/p/w300/';

const QueryList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={css.movie}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.link}
            >
              <img
                src={
                  movie.poster_path ? `${IMG_URL}${movie.poster_path}` : noImage
                }
                alt={movie.title}
              ></img>
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default QueryList;
