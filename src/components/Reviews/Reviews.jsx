import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import css from 'components/Reviews/Reviews.module.css';

const API_KEY = 'db09f9e57e28be6797f7d8ba986a8c6d';
const URL = 'https://api.themoviedb.org/3/movie/';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const gerReviews = async () => {
      let response = await fetch(
        `${URL}${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      );
      response = await response.json();
      setReviews(response.results);
    };
    gerReviews();
  }, [movieId]);

  return reviews && reviews.length > 0 ? (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id} className={css.item}>
            <h3>{review.author}:</h3>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No Reviews.</p>
  );
};

export default Reviews;
