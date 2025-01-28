import { Box } from '@mui/material';
import EditUser from '@sections/auth/user/EditUser.tsx';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function EditUserPage() {
    return (
        <>
            <Helmet>
                <title> Edit profile </title>
            </Helmet>

            <Box className={'container'} sx={{ justifyItems: 'center' }}>
                <EditUser />
            </Box>
        </>
    );
}
