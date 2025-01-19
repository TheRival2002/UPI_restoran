import { Outlet } from 'react-router';
import { Footer, Navbar } from './index.ts';

// ----------------------------------------------------------------------

export default function MainLayout() {

    return (
        <main>
            <Navbar />

            <Outlet />

            <Footer />
        </main>
    );

}
