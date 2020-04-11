import React from 'react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

import SignUp from '../components/SignUp';
import theme from '../theme';

const providerFn = ({ theme, children }) => {
  const serialTheme = JSON.parse(JSON.stringify(theme));
  const muTheme = createMuiTheme(serialTheme);
  return <ThemeProvider theme={muTheme}>{children}</ThemeProvider>;
};

export default {
  title: '<MUI Examples',
  component: SignUp,
  decorators: [withThemes(null, [theme], { providerFn })],
};

export const ToStorybook = () => <SignUp />;

ToStorybook.story = {
  name: 'SignUp',
};
