import React from 'react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

import SignUp from '../components/SignUp';
import { theme1, theme2 } from '../theme';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

export default {
  title: 'MUI Examples',
  component: SignUp,
  decorators: [withThemes(null, [theme1, theme2], { providerFn })],
};

export const ToStorybook = () => <SignUp />;

ToStorybook.story = {
  name: 'SignUp',
};
