import { Helmet } from 'react-helmet-async';
import Register from '../../sections/auth/register/Register.tsx';

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
