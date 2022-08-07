import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import imgApi from '../service/api';
import { SearchBar } from './searchbar/Searchbar';
import { ImageGallery } from './imageGallery/ImageGallery';
import { LoadMoreButton } from './button/Button';
import { Modal } from './modal/Modal';
import { Loader } from './loader/Loader';

export class App extends Component {
  state = {
    images: [],
    searchQuery: null,
    page: 1,
    totalImgs: null,
    selectedImg: null,
    tags: null,
    loading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (searchQuery.trim() === '') {
      toast.error('please enter your query in the search field');
      return;
    }

    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      this.setState({
        loading: true,
      });

      try {
        const imgData = await imgApi(searchQuery, page);
        const imagesHits = imgData.hits;
        const imagesTotal = imgData.total;

        if (imagesTotal === 0 || searchQuery.trim() === '') {
          toast.warn('No results. Please, try something else');
          this.setState({
            loading: false,
          });
          return;
        }

        this.setState(({ images }) => ({
          images: [...images, ...imagesHits],
          totalImgs: imagesTotal,
          loading: false,
        }));
      } catch (error) {
        toast.error('..We have a problem');
      }
    }
  }

  onSubmitForm = ({ searchQuery }) => {
    if (this.state.searchQuery === searchQuery) {
      return;
    }

    this.setState({ searchQuery, page: 1, images: [], loading: false });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        loading: true,
        page: prevState.page + 1,
      }),
      () => window.scrollBy({ top: 900, left: 0, behavior: 'smooth' })
    );
  };

  onSelectedLargeImg = (largeImgUrl, tags) => {
    this.setState({
      selectedImg: largeImgUrl,
      tags: tags,
    });
  };

  onCloseModal = () => {
    this.setState({
      selectedImg: null,
    });
  };

  render() {
    const { images, totalImgs, selectedImg, tags, loading } = this.state;

    return (
      <>
        <SearchBar onSubmitForm={this.onSubmitForm} />

        {images.length > 0 && (
          <ImageGallery images={images} selectedImg={this.onSelectedLargeImg} />
        )}

        {images.length > 0 && images.length !== totalImgs && (
          <LoadMoreButton onClick={this.loadMore} />
        )}

        {loading && <Loader />}

        {selectedImg && (
          <Modal
            modalImg={selectedImg}
            tags={tags}
            onClose={this.onCloseModal}
          />
        )}

        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
          pauseOnHover
        />
      </>
    );
  }
}
