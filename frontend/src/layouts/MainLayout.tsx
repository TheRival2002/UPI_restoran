import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './index.ts';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';

// ----------------------------------------------------------------------

export default function MainLayout() {

    return (
        <main style={{ position: 'relative' }}>
            <Navbar/>

            <div className={'homeBannerImg'}>
                <img src={HomeBanner} alt="banner"/>
            </div>

            <Box pt={'66.5px'}>
                <Outlet/>
            </Box>

            <Footer/>
        </main>
    );

}
