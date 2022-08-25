import axios from 'axios';

const KEY = '47bf952bf58b26c55c9961725433383a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: KEY,
};
// Trending movies list
export async function getTrendingMovies() {
  const res = await axios.get('/trending/movie/day');

  return res.data;
}
// Movies list by search query
export async function getMoviesByQuery(query) {
  const res = await axios.get(`search/movie?query=${query}`);

  return res.data;
}

// Movie by id
export async function getMovieById(movieId) {
  const res = await axios.get(`/movie/${movieId}`);

  return res.data;
}
// get cast list
export async function getCastListById(movieId) {
  const res = await axios.get(`/movie/${movieId}/credits`);

  return res.data;
}

// get reviews
export async function getReviewsById(movieId) {
  const res = await axios.get(`/movie/${movieId}/reviews`);

  return res.data;
}
