import { Component } from 'react';

import { Box } from './Box';
import { Title } from './App.styled';

export class App extends Component {
  state = {};

  render() {
    return (
      <Box
        bg="lavender"
        width="50%"
        mx="auto"
        p="4"
        my="4"
        boxShadow="boxShadow"
      >
        <Title>Hi</Title>
      </Box>
    );
  }
}
