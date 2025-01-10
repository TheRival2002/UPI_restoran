import { paths } from '@routes/paths.ts';
import c from '@styles/register.module.css';

// ----------------------------------------------------------------------

export default function RegisterActions() {
    return (
        <div className={c.registerFooter}>
            <p>
                Already have an account? <a href={paths.auth.login}>Login</a>
            </p>
            <p>
                <a href={paths.home.root}>Go to Home</a>
            </p>
        </div>
    );
}
