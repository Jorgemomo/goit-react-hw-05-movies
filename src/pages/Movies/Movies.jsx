import SearchBox from '../../components/SearchBox/SearchBox';
import HeadingPage from 'pages/HeadingPage/HeadingPage';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../ApiServices/API';
import { Link } from 'react-router-dom';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      getSearchMovies(query).then(setMovies);
    }
  }, [query, searchParams]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <ul>
        <HeadingPage text={'Search your movie'}></HeadingPage>
        <SearchBox value={query} onChange={updateQueryString} />
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MoviesPage;
