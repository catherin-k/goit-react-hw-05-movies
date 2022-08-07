import axios from 'axios';

const KEY = '19947023-b7017f4974f73f87e742a194c';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

async function imgApi(searchQuery, page) {
  const res = await axios.get(`?q=${searchQuery}&page=${page}`);
  return res.data;
}

export default imgApi;

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12
