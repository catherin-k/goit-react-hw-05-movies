import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from '../Box';
import { Nav, NavLinkStyled } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Box as="header" p={4} boxShadow="0px 6px 7px -2px rgba(56,56,56,0.7)">
        <Nav>
          <NavLinkStyled to="/">Home</NavLinkStyled>
          <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </Nav>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
