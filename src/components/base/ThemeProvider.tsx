import { ThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import { PaletteOptions, SimplePaletteColorOptions } from '@material-ui/core/styles/createPalette';
import { SpacingOptions } from '@material-ui/core/styles/createSpacing';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Shadows } from '@material-ui/core/styles/shadows';
import React from 'react';

const defaultTheme = createMuiTheme();

const [...defaultShadows] = defaultTheme.shadows;
const shadows: Shadows = Object.assign(defaultShadows, [
    'none',
    '0px 2px 10px rgba(0, 0, 0, 0.1)',
    '0px 2px 10px rgba(0, 0, 0, 0.2)'
]);

export const fabButtonHeight = 56;

const spacing: SpacingOptions = factor => [0, 4, 8, 12, 16, 24, 32, 40, 48, 60, 64][factor];

const primary: SimplePaletteColorOptions = {
    main: '#0036CE'
};

const secondary: SimplePaletteColorOptions = {
    main: '#3277F6'
};

const error: SimplePaletteColorOptions = {
    main: '#FF0000',
    dark: '#9C0000'
};

const warning: SimplePaletteColorOptions = {
    main: '#FDA800'
};
const success: SimplePaletteColorOptions = {
    main: '#3EC300',
    dark: '#008148'
};

const palette: PaletteOptions = {
    primary,
    secondary,
    error,
    warning,
    success
};

export const typography: TypographyOptions = {
    h1: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '40px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto'
    },
    h2: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '24px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto',
        lineHeight: '28px'
    },
    h3: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '20px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto',
        lineHeight: '23px'
    },
    h4: {
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: '16px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto'
    },
    h5: {
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: '16px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto'
    },
    h6: {
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '14px',
        letterSpacing: '0.15px',
        fontFamily: 'Roboto'
    },
    subtitle1: {
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: '12px',
        letterSpacing: '0px',
        fontFamily: 'Roboto',
        lineHeight: '14px'
    }
};

const theme = createMuiTheme({
    palette,
    spacing,
    shadows,
    typography,
    
});

const ThemedThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider theme={ theme }>
        { children }
    </ThemeProvider>
);

export default ThemedThemeProvider;
