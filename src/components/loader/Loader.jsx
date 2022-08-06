import { Oval } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <Oval
        width={100}
        height={100}
        color={'#9370DB'}
        secondaryColor={'#3f51b5'}
      />
    </LoaderBox>
  );
};
