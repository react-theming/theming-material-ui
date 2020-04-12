import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import { theme1 } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme1}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
