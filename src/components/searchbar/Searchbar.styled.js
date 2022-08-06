import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  /* z-index: 1100; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.backGround};
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const FormBox = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
`;
export const BtnSearchForm = styled.button`
  display: inline-block;
  width: 60px;
  height: 32px;
  padding: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[3]}px;
  border: 0;
  background-color: ${p => p.theme.colors.lavender};
  outline: none;
  :hover {
    background-color: ${p => p.theme.colors.hover};
  }
`;

export const BtnText = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  border: 0;
`;
export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  font-family: inherit;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;
