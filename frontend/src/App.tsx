import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router';
import Router from './router.tsx';
import './App.css';

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
