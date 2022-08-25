import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import defaultImg from '../images/popcorn1.png';
import { Wraper } from './MovieCard.styled';

export const MovieCard = ({ movieInfo }) => {
  const { poster_path, overview, title, vote_average, genres, release_date } =
    movieInfo;

  const date = release_date.slice(0, 4);
  const poster =
    poster_path === null
      ? defaultImg
      : `https://image.tmdb.org/t/p/w300${poster_path}`;

  const score = Math.round(vote_average * 10);
  const genresString = genres.map(genre => genre.name).join(', ');

  return (
    <Box p={4} borderBottom="normal" display="flex">
      <img src={poster} alt={title} />

      <Wraper>
        <h2>
          {title} ({date})
        </h2>
        <p>User score: {score}%</p>

        <h2>Overview</h2>
        <p>{overview}</p>

        <h2>Genres</h2>
        <p>{genresString}</p>
      </Wraper>
    </Box>
  );
};

MovieCard.propTypes = {
  images: PropTypes.objectOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      title: PropTypes.string.isRequired,
      vote_average: PropTypes.number,
      release_date: PropTypes.string,
      genres: PropTypes.arrayOf(
        PropTypes.objectOf(
          PropTypes.shape({
            name: PropTypes.string,
          })
        )
      ),
    })
  ),
};
