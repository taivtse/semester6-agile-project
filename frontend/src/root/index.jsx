import React from 'react';
import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import AppRouter from './AppRouter';

import themeObject from './theme';

const theme = createMuiTheme(themeObject);

const RootApp = () => (
  <MuiThemeProvider theme={theme}>
    <AppRouter />
  </MuiThemeProvider>
);
export default RootApp;
