import { createTheme } from '@mui/material';

// ----------------------------------------------------------------------

const PRIMARY = {
    light: '#f89d82',
    main: '#fe724c',
    dark: '#bd5431',
};

const SECONDARY = {
    light: '#f8d77c',
    main: '#ffc529',
    dark: '#b28a23',
};

const customTheme = createTheme({
    palette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        primary: PRIMARY,
        secondary: SECONDARY,
        text: {
            primary: '#000',
            secondary: '#828282',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    }
});

export default customTheme;
