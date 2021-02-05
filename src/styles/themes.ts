import { createMuiTheme } from '@material-ui/core';
import colors from './colors';

const defaultTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: colors.red,
      contrastText: colors.black,
    },
    secondary: {
      main: colors.green,
    },
    background: {
      default: colors.lightGray,
    },
  },

});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: colors.white,
    },
  },
});

const headerLightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: colors.white,
      contrastText: colors.black,
    },
  },
});

export { defaultTheme, darkTheme, headerLightTheme };
