import { createTheme } from '@mui/material/styles';
import { Theme } from 'Global/gobalTypes';

const LIGHT_THEME: Theme = createTheme({
  palette: {
    background: {
      default: '#f8f9fa',
      white: '#ffff',
      darkBlue: 'rgb(52, 71, 103)'
    },
    buttons: {
      primary: '#007fff',
      yellow: '#ffeb3b',
      onHover: '#1976d21c'
    },
    icons: {
      Blue: 'rgb(52, 71, 103)',
      White: 'rgb(52, 71, 103)'
    },
    text: {
      main: 'rgb(52, 71, 103)'
    }
  },
  utils: {
    pxToRem: (value: number) => `${value / 16}rem`
  }
});

const DARK_THEME = createTheme({
  palette: {
    background: {
      default: '#2d364e',
      white: '#2d364e',
      darkBlue: '#ffff'
    },
    buttons: {
      primary: '#007fff',
      yellow: '#ffeb3b',
      onHover: '#1976d21c'
    },
    icons: {
      darkBlue: 'rgb(52, 71, 103)',
      White: '#ffff'
    },
    text: {
      main: '#ffff'
    }
  },
  utils: {
    pxToRem: (value: number) => `${value / 16}rem`
  }
});

export { LIGHT_THEME, DARK_THEME };
