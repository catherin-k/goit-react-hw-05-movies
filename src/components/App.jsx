import Home from 'pages/Home';
import Movies from '../pages/Movies';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </>
  );
};

// import { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import imgApi from '../service/api';
// import { SearchBar } from './searchbar/Searchbar';
// import { ImageGallery } from './imageGallery/ImageGallery';
// import { LoadMoreButton } from './button/Button';
// import { Modal } from './modal/Modal';
// import { Loader } from './loader/Loader';

// export const App = () => {
//   const [images, setImages] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(null);
//   const [page, setPage] = useState(1);
//   const [totalImgs, setTotalImgs] = useState(null);
//   const [selectedImg, setSelectedImg] = useState(null);
//   const [tags, setTags] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!searchQuery) {
//       return;
//     }

//     async function getImages() {
//       setLoading(true);
//       try {
//         const imgData = await imgApi(searchQuery, page);
//         const imagesHits = imgData.hits;

//         setTotalImgs(imgData.total);
//         if (!imagesHits.length) {
//           toast.warn('No results. Please, try something else');
//           setLoading(false);
//           return;
//         }
//         setImages(prevImg => [...prevImg, ...imagesHits]);

//         window.scrollBy({ top: 900, left: 0, behavior: 'smooth' });
//         setLoading(false);
//       } catch (error) {
//         toast.error('..We have a problem');
//       }
//     }
//     getImages();
//   }, [page, searchQuery]);

//   const onSubmitForm = ({ query }) => {
//     if (searchQuery === query) {
//       return;
//     }
//     if (query.trim() === '') {
//       toast.error('please enter your query in the search field');
//       return;
//     }
//     setSearchQuery(query);
//     setPage(1);
//     setImages([]);
//     setTotalImgs(null);
//     setLoading(false);
//   };

//   const loadMore = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const onCloseModal = () => {
//     setSelectedImg(null);
//     setTags(null);
//   };

//   const onSelectedLargeImg = (largeImgUrl, tags) => {
//     setSelectedImg(largeImgUrl);
//     setTags(tags);
//   };

//   return (
//     <>
//       <SearchBar onSubmitForm={onSubmitForm} />

//       {images.length > 0 && (
//         <ImageGallery images={images} selectedImg={onSelectedLargeImg} />
//       )}

//       {images.length > 0 && images.length !== totalImgs && (
//         <LoadMoreButton onClick={loadMore} />
//       )}

//       {loading && <Loader />}

//       {selectedImg && (
//         <Modal modalImg={selectedImg} tags={tags} onClose={onCloseModal} />
//       )}

//       <ToastContainer
//         autoClose={3000}
//         position="top-center"
//         theme="colored"
//         pauseOnHover
//       />
//     </>
//   );
// };
