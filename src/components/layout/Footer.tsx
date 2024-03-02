// src/components/Footer.js
import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


const Footer = () => (

    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#f8f9fa', // Set your preferred background color
        padding: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Mi Sitio Web
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        © {new Date().getFullYear()} Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Desarrollado con Material-UI y Gatsby
      </Typography>
      {/* Puedes agregar más elementos según tus necesidades, como enlaces, iconos, etc. */}
    </Box>
);

export default Footer;
