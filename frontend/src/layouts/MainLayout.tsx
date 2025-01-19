import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './index.ts';

// ----------------------------------------------------------------------

export default function MainLayout() {

    return (
        <main style={{ position: 'relative' }}>
            <Navbar />

            <Box pt={'66.5px'}>
                <Outlet />
            </Box>

            <Footer />
        </main>
    );

}
