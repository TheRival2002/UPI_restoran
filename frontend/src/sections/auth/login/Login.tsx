import c from '@styles/login.module.css';
import LoginActions from './LoginActions.tsx';
import LoginForm from './LoginForm.tsx';

// ----------------------------------------------------------------------

export default function Login() {
    return (
        <div className={c.loginContainer}>
            <h1 className={c.loginHeader}>Login</h1>

            <LoginForm/>

            <LoginActions/>
        </div>
    );
}
