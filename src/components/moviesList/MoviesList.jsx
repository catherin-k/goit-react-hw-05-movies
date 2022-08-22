import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List } from './MoviesList.styled';

const TrendingMoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`}>{title}</Link>
        </li>
      ))}
    </List>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }).isRequired
  ),
};

export default TrendingMoviesList;
