import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from 'components/Cast/Cast.module.css';
import imagePlug from 'img/blank.png';

const API_KEY = 'db09f9e57e28be6797f7d8ba986a8c6d';
const URL = 'https://api.themoviedb.org/3/movie/';
const IMG_URL = 'https://image.tmdb.org/t/p/w200';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      let response = await fetch(
        `${URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`
      );
      response = await response.json();
      setCast(response.cast);
    };

    getCast();
  }, [movieId]);

  return cast && cast.length > 0 ? (
    <ul className={css.list}>
      {cast.map(actor => {
        return (
          <li key={actor.id} className={css.item}>
            <img
              src={
                actor.profile_path
                  ? `${IMG_URL}${actor.profile_path}`
                  : imagePlug
              }
              alt={actor.name}
            ></img>
            <div className={css.actor}>
              <h3>{actor.name}</h3>
              <p>Role: {actor.character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No Information.</p>
  );
};

export default Cast;
