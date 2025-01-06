import { paths } from '../../../routes/paths.ts';
import c from '../../../styles/register.module.css';

// ----------------------------------------------------------------------

export default function RegisterActions() {
    return (
        <>
            <p className={c.registerFooter}>
                Already have an account? <a href={paths.auth.login}>Login</a>
            </p>
            <p className={c.registerFooter}>
                <a href={paths.home.root}>Go to Home</a>
            </p>
        </>
    );
}
