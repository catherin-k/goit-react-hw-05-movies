import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchBar } from 'components/searchbar/Searchbar';
import { getMoviesByQuery } from '../service/api';
import MoviesList from '../components/moviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchMoviesSearch(serchQuery) {
      try {
        const moviesData = await getMoviesByQuery(serchQuery);
        if (!moviesData.results.length && query) {
          toast.warn('No results. Please, try something else');
          return;
        }
        setMovies(moviesData.results);
      } catch (error) {
        toast.error('..We have a problem');
      }
    }
    fetchMoviesSearch(query);
  }, [query, setSearchParams]);

  // Form Submit
  const onSubmitForm = (value, { resetForm }) => {
    const searchQuery = value.query.trim();

    if (searchQuery === '') {
      toast.error('please enter your query in the search field');
      return;
    }

    setSearchParams(searchQuery !== '' ? value : {});

    resetForm();
  };

  return (
    <>
      <SearchBar onSubmitForm={onSubmitForm} />
      <MoviesList movies={movies} />

      <ToastContainer
        autoClose={3000}
        position="top-center"
        theme="colored"
        pauseOnHover
      />
    </>
  );
};

export default Movies;
