import axios from 'axios';

const KEY = '47bf952bf58b26c55c9961725433383a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: KEY,
};

export async function getTrendingMovies() {
  const res = await axios.get('/trending/movie/day');

  return res.data;
}

export async function getMoviesByQuery(query) {
  const res = await axios.get(`search/movie?query=${query}`);

  return res.data;
}
