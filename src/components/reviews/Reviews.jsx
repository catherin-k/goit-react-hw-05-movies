import { getReviewsById } from '../../service/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Title, Item, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchReviewsById(movieId) {
      try {
        const data = await getReviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        error.message('..We have a problem');
      }
    }

    fetchReviewsById(movieId);
  }, [movieId]);

  if (!reviews) {
    return;
  }
  return reviews.length === 0 ? (
    <p>We don`t have any reviews for this movie</p>
  ) : (
    <List>
      {reviews.map(({ author, content, id }) => {
        return (
          <Item key={id}>
            <Title>Author: {author}</Title>
            <p>{content}</p>
          </Item>
        );
      })}
    </List>
  );
};

export default Reviews;
