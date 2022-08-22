// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  Wraper,
  FormBox,
  BtnSearchForm,
  BtnText,
  Input,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmitForm }) => {
  return (
    <Wraper>
      <Formik initialValues={{ query: '' }} onSubmit={onSubmitForm}>
        <FormBox>
          <Input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
          />

          <BtnSearchForm type="submit">
            <BtnText>Search</BtnText>
          </BtnSearchForm>
        </FormBox>
      </Formik>
    </Wraper>
  );
};

// SearchBar.propTypes = {
//   onSubmitForm: PropTypes.func.isRequired,
// };
