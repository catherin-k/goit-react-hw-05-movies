import PropTypes from 'prop-types';
import { ImageList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/imageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, selectedImg }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          largeImageURL={largeImageURL}
          previewImg={webformatURL}
          tags={tags}
          selectedImg={selectedImg}
        />
      ))}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }).isRequired
  ),
};
