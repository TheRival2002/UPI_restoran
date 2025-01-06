import Register from '@sections/auth/register/Register.tsx';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------------------

export default function RegisterPage() {
    return (
        <>
            <Helmet>
                <title>Registration</title>
            </Helmet>

            <Register />
        </>
    );
}
