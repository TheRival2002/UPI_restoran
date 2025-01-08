import Login from '@sections/auth/login/Login.tsx';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title> Login </title>
            </Helmet>

            <Login />
        </>
    );
}
