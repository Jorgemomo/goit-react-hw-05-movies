import Container from 'components/Container/Container';
import HeadingPage from 'pages/HeadingPage/HeadingPage';
import { Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'ApiServices/API';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies);
  }, []);

  return (
    <Container>
      <ul>
        <HeadingPage text={'Trending today'}></HeadingPage>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`}>
              {trendingMovie.title ||
                trendingMovie.name ||
                trendingMovie.moviePoster}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Home;
