import React from 'react';
import { createTheme} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1d1d1d', // Background for paper elements
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 28,
      fontWeight: 600,
    },
    h3: {
      fontSize: 24,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 600,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});

export default theme;
