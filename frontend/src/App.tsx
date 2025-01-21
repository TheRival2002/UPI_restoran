import { CssBaseline, ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import { AuthProvider } from './providers/AuthContext.tsx';
import customTheme from './theme/customTheme.ts';

// ----------------------------------------------------------------------

const App = () => {
    return (
        <AuthProvider>
            <HelmetProvider>
                <ThemeProvider theme={customTheme}>
                    <CssBaseline />
                    <BrowserRouter>
                        <Router/>
                    </BrowserRouter>
                </ThemeProvider>
            </HelmetProvider>
        </AuthProvider>
    );
};
export default App;
