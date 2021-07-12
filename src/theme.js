import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme1 = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export const theme2 = createTheme({
  palette: {
    primary: {
      main: '#8862a1',
    },
    secondary: {
      main: '#f6144a',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
