// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Green shade
    },
    secondary: {
      main: '#81C784', // Lighter green for accents
    },
    background: {
      default: '#E8F5E9', // Light green background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2E7D32',
      secondary: '#1B5E20',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    body1: {
      color: '#2E7D32',
    },
  },
});

export default theme;
