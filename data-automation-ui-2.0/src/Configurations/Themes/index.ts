import { createTheme } from '@mui/material/styles';

const LIGHT_THEME = createTheme({
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
  }
});

export { LIGHT_THEME, DARK_THEME };
