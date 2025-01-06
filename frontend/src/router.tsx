import { useRoutes } from 'react-router';
import Login from './components/Login/Login.tsx';
import Register from './components/Register/Register.tsx';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Register />,
                },
            ],
        },
        {
            path: '/',
            element: ( // TODO ovo cemo izmijenit, imat cemo drugu komponentu za home page
                <div className="welcome-container">
                    <h1 className="welcome-header">Welcome to FoodHub!</h1>
                    <p className="welcome-subtitle">
                        Your favourite foods delivered fast at your door.
                    </p>
                    <button
                        onClick={() =>
                            (window.location.href = '/auth/register')
                        }
                    >
                        Register
                    </button>
                    <button
                        onClick={() => (window.location.href = '/auth/login')}
                    >
                        Login
                    </button>
                </div>
            ),
        },
    ]);
}
