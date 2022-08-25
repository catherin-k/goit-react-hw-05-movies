import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../service/api';
import TrendingMoviesList from '../components/moviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        const { results } = await getTrendingMovies();

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <TrendingMoviesList movies={movies} />
    </>
  );
};

export default Home;
