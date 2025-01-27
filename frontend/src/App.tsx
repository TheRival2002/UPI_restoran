import { CssBaseline, ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import { AuthProvider } from './providers/AuthContext.tsx';
import customTheme from './theme/customTheme.ts';
import { CartProvider } from '@providers/CartContext.tsx';

// ----------------------------------------------------------------------

const App = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <HelmetProvider>
                    <ThemeProvider theme={customTheme}>
                        <CssBaseline/>
                        <BrowserRouter>
                            <Router/>
                        </BrowserRouter>
                    </ThemeProvider>
                </HelmetProvider>
            </CartProvider>
        </AuthProvider>
    );
};
export default App;
