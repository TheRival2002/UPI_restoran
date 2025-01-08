import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';

// ----------------------------------------------------------------------

const App = () => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </HelmetProvider>
    );
};
export default App;
