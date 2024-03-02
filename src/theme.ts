// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
        paper: '#fff',
        default: '#fafafa',
    },
    primary: {
      main: '#ff0090', // Cambia esto al color principal que desees
    },
    secondary: {
      main: '#ff4081', // Cambia esto al color secundario que desees
    },
  },
  // Agrega más configuraciones de tema según tus necesidades
});

export default theme;
