import c from '@styles/login.module.css';
import { useLocation } from 'react-router';
import LoginActions from './LoginActions.tsx';
import LoginForm from './LoginForm.tsx';

// ----------------------------------------------------------------------

export default function Login() {
    const { state } = useLocation();
    const { checkoutCart } = state || {};

    return (
        <div className={c.loginContainer}>
            <h1 className={c.loginHeader}>Login</h1>

            <LoginForm checkoutCart={checkoutCart || false} />

            <LoginActions checkoutCart={checkoutCart || false} />
        </div>
    );
}
