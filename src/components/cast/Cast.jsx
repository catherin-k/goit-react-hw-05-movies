import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastListById } from '../../service/api';
import defaultImg from '../images/popcorn1.png';
import { Item, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCastListById(movieId) {
      try {
        const data = await getCastListById(movieId);
        setCast(data.cast);
      } catch (error) {
        error.message('..We have a problem');
      }
    }

    fetchCastListById(movieId);
  }, [movieId]);

  if (!cast) {
    return;
  }

  return (
    <ul>
      {cast.map(({ id, character, name, profile_path }) => {
        const photo =
          profile_path === null
            ? defaultImg
            : `https://image.tmdb.org/t/p/w300${profile_path}`;

        return (
          <Item key={id}>
            <img src={photo} alt={name} />
            <Text>{name}</Text>
            <Text>Character: {character}</Text>
          </Item>
        );
      })}
    </ul>
  );
};
export default Cast;
