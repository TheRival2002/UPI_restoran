import { paths } from '@routes/paths.ts';
import c from '@styles/login.module.css';

// ----------------------------------------------------------------------

export default function LoginActions() {
    return (
        <div className={c.loginFooter}>
            <p>
                Don’t have an account? <a href={paths.auth.register}> Register</a>
            </p>
            <p>
                <a href={paths.home.root}>Go to Home</a>
            </p>
        </div>
    );
}
