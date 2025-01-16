import { Outlet } from 'react-router';
import styles from '../styles/authLayout.module.css';

// ----------------------------------------------------------------------

export default function AuthLayout() {

    return (
        <main className={styles.authBody}>
            <div className={styles.authContainer}>
                <Outlet />
            </div>
        </main>
    );

}
