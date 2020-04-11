import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProTip from './ProTip';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <SignUp />
        <ProTip />
      </Box>
    </Container>
  );
}
