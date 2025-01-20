import { Box } from '@mui/material';
import { Outlet } from 'react-router';

// ----------------------------------------------------------------------

export default function AuthLayout() {

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
            <Box
                sx={{
                    flexGrow: 1,
                    background: 'linear-gradient(40deg, #f18b6e, #ffe396)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'grid',
                    placeContent: 'center',
                    py: 5,
                }}
            >
                <Outlet/>
            </Box>
        </Box>
    );

}
