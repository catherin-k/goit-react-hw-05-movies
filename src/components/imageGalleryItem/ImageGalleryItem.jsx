import PropTypes from 'prop-types';
import { ImgGalleryItem, Img } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  previewImg,
  selectedImg,
  tags,
  largeImageURL,
}) => {
  return (
    <ImgGalleryItem>
      <Img
        src={previewImg}
        alt={tags}
        width={150}
        onClick={() => selectedImg(largeImageURL, tags)}
      />
    </ImgGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  previewImg: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
