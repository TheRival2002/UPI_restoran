import { createTheme } from '@mui/material';

// ----------------------------------------------------------------------

const COMMON = {
    black: '#000',
    white: '#fff',
};

const PRIMARY = {
    light: '#ff845a',
    main: '#fe724c',
    dark: '#ce411a',
};

const SECONDARY = {
    light: '#f8d77c',
    main: '#ffc529',
    dark: '#b28a23',
};

const customTheme = createTheme({
    palette: {
        common: COMMON,
        primary: PRIMARY,
        secondary: SECONDARY,
        text: {
            primary: COMMON.black,
            secondary: '#828282',
        },
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
    }
});

export default customTheme;
