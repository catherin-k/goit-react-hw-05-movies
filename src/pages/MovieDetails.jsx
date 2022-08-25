import { useState, useEffect, Suspense } from 'react';
import { useLocation, useParams, Link, Outlet } from 'react-router-dom';
import { getMovieById } from '../service/api';
import { Box } from '../components/Box';
import { ToastContainer, toast } from 'react-toastify';
import { MovieCard } from '../components/movieCard/MovieCard';
import { BackLink } from '../components/backLink/BackLink';
import styled from 'styled-components';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchMovieById(movieId) {
      try {
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        toast.error('..We have a problem');
      }
    }

    fetchMovieById(movieId);
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkHref} />
      {movie && <MovieCard movieInfo={movie} />}
      <Box p={4} borderBottom="normal">
        <p>Additional information</p>
        <ul>
          <Item>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
          </Item>
          <Item>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </Item>
        </ul>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      <ToastContainer
        autoClose={3000}
        position="top-center"
        theme="colored"
        pauseOnHover
      />
    </>
  );
};

const Item = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export default MovieDetails;
