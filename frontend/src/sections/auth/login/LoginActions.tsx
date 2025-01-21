import { paths } from '@routes/paths.ts';
import c from '@styles/login.module.css';
import { Link } from 'react-router';

// ----------------------------------------------------------------------

export default function LoginActions() {
    return (
        <div className={c.loginFooter}>
            <p>
                Don’t have an account? <Link to={paths.auth.register}>Register</Link>
            </p>
            <p>
                <Link to={paths.home.root}>Go to Home</Link>
            </p>
        </div>
    );
}
