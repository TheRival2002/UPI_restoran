import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import { UserProvider } from './providers/UserContext.tsx';

// ----------------------------------------------------------------------

const App = () => {
    return (
        <UserProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <Router/>
                </BrowserRouter>
            </HelmetProvider>
        </UserProvider>
    );
};
export default App;
