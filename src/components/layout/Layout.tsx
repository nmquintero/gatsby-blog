// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';
// import '../styles/layout.css'; // Puedes crear este archivo para agregar estilos específicos para tu layout si es necesario

const Layout = ({ children }: { children: React.ReactNode }) => (
    
    <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="lg">
            <Box sx={{ my: 10 }}>
                {children}
            </Box>
        </Container>
        <Footer />
    </ThemeProvider>
);

export default Layout;
