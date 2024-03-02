// src/gatsby-browser.js
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => (
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
);