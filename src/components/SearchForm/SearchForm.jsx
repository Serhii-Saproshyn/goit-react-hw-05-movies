import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import css from 'components/SearchForm/SearchForm.module.css';
import QueryList from 'components/QueryList/QueryList';

const API_KEY = 'db09f9e57e28be6797f7d8ba986a8c6d';
const URL = 'https://api.themoviedb.org/3/search/movie';

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState();
  const queryValue = searchParams.get('q') ?? '';
  const [search, setSearch] = useState();

  useEffect(() => {
    if (!search) {
      return;
    }
    const getQueryResults = async () => {
      let response = await fetch(
        `${URL}?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      response = await response.json();
      setSearchResult(response.results);
    };
    getQueryResults().catch(console.error);
  }, [search]);

  const updateQueryEntry = evt => {
    evt.target.value === ''
      ? setSearchParams({})
      : setSearchParams({ q: evt.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearch(queryValue);
  };

  return (
    <div>
      <div className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css['search-button']}>
            <span className={css['button-label']}></span>
          </button>

          <input
            className={css.input}
            onChange={updateQueryEntry}
            value={queryValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />
        </form>
      </div>
      <>
        {searchResult && searchResult.length > 0 ? (
          <QueryList movies={searchResult} />
        ) : null}
      </>
      {searchResult && searchResult.length === 0 && (
        <p>Sorry we didn`t found movies for you`r request</p>
      )}
    </div>
  );
};

export default SearchForm;
