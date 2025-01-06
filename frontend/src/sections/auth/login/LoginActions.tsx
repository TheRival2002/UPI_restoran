import { paths } from '@routes/paths.ts';
import c from '@styles/login.module.css';

// ----------------------------------------------------------------------

export default function LoginActions() {
    return (
        <>
            <p className={c.loginFooter}>
                Don’t have an account? <a href={paths.auth.register}> Register</a>
            </p>
            <p className={c.loginFooter}>
                <a href={paths.home.root}>Go to Home</a>
            </p>
        </>
    );
}
