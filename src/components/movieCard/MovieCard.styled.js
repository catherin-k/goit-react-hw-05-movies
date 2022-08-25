import styled from 'styled-components';

export const Wraper = styled.div`
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
