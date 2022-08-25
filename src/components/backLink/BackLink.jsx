import PropTypes from 'prop-types';
import { HiArrowLeft } from 'react-icons/hi';
import { Back } from './BackLink.styled';

export const BackLink = ({ to }) => {
  return (
    <Back to={to}>
      <HiArrowLeft size="24" />
      Go back
    </Back>
  );
};

// BackLink.propTypes = {
//   to: PropTypes.objectOf(PropTypes.string),
// };

BackLink.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};
