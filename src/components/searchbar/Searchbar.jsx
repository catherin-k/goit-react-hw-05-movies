import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Header,
  FormBox,
  BtnSearchForm,
  BtnText,
  Input,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmitForm }) => {
  return (
    <Header>
      <Formik initialValues={{ searchQuery: '' }} onSubmit={onSubmitForm}>
        <FormBox>
          <BtnSearchForm type="submit">
            <BtnText>Search</BtnText>
          </BtnSearchForm>

          <Input
            name="searchQuery"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormBox>
      </Formik>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
