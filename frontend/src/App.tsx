import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import { AuthProvider } from './providers/AuthContext.tsx';

// ----------------------------------------------------------------------

const App = () => {
    return (
        <AuthProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </HelmetProvider>
        </AuthProvider>
    );
};
export default App;
