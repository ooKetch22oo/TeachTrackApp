// Contains global styles and theme configurations.
// --------------------------------------------------

import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        primary: '#0077c2',
        secondary: '#8bc34a',
        tertiary: '#ff9800',
        error: '#f44336',
        success: '#4caf50',
        warning: '#ffeb3b',
        info: '#2196f3',
        white: '#E5F8FD',
        black: '#021024',
        gray: '#9e9e9e',
        grayLight: '#e0e0e0',
        grayDark: '#616161',
        grayDarker: '#424242',
        grayDarkest: '#212121',
        transparent: 'transparent',
    },
    fonts: {
        primary: 'Open Sans, sans-serif',
        secondary: 'Open Sans light, sans-serif',
        Headers: 'Ralway Bold, sans-serif',
    },
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
    fontWeights: {
        light: 300,
        normal: 400,
        bold: 700,
    },
    lineHeights: {
        small: 1,
        medium: 1.2,
        large: 2,
    },
    letterSpacings: {
        small: '0.1em',
        medium: '0.2em',
        large: '0.3em',
    },
    breakpoints: {
        xs: '320px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
    borderRadius: {
        small: '3px',
        medium: '5px',
        large: '10px',
    },
    
};

export const GlobalStyle = createGlobalStyle