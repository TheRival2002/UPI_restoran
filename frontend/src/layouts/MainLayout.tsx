import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
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
