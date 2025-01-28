import c from '@styles/register.module.css';
import { useLocation } from 'react-router';
import RegisterActions from './RegisterActions.tsx';
import RegisterForm from './RegisterForm.tsx';

// ----------------------------------------------------------------------

export default function Register() {
    const { state } = useLocation();
    const { checkoutCart } = state || {};

    return (
        <div className={c.registerContainer}>
            <h1 className={c.registerHeader}>Register</h1>

            <RegisterForm checkoutCart={checkoutCart || false} />

            <RegisterActions checkoutCart={checkoutCart || false} />
        </div>
    );
}
