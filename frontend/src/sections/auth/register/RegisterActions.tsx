import { paths } from '@routes/paths.ts';
import c from '@styles/register.module.css';
import { Link } from 'react-router';

// ----------------------------------------------------------------------

export default function RegisterActions({
    checkoutCart,
}: { checkoutCart: boolean }) {
    return (
        <div className={c.registerFooter}>
            <p>
                Already have an account? <Link to={paths.auth.login} state={{ checkoutCart }}>Login</Link>
            </p>
            <p>
                <Link to={paths.home.root}>Go to Home</Link>
            </p>
        </div>
    );
}
