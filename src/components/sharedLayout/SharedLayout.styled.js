import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: ${p => p.theme.space[5]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  text-decoration: none;
  color: ${p => p.theme.colors.black};

  :hover:not(.active),
  :focus {
    color: ${p => p.theme.colors.hover};
  }
  &.active {
    color: ${p => p.theme.colors.red};
    border-bottom: ${p => p.theme.borders.focus};
  }
`;
