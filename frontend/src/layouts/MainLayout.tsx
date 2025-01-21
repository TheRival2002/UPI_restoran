import { Box } from '@mui/material';
import { Outlet } from 'react-router';
import { Footer, Navbar } from './index.ts';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';

// ----------------------------------------------------------------------

export default function MainLayout() {

    return (
        <Box
            component={'main'}
            sx={{
                position: 'relative',
                height: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Navbar/>

            <div className={'homeBannerImg'}>
                <img src={HomeBanner} alt="banner"/>
            </div>

            <Box
                sx={{
                    flexGrow: 1,
                    pt: '66.5px',
                }}
            >
                <Outlet/>
            </Box>

            <Footer/>
        </Box>
    );

}
