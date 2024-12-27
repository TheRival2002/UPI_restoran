import { useRoutes } from 'react-router';
import Login from './Login.tsx';
import SignUp from './SignUp.tsx';

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
                    element: <SignUp />,
                }
            ],
        },
        {
            path: '/',
            element: <div className="welcome-container">
                <h1 className="welcome-header">Welcome to FoodHub!</h1>
                <p className="welcome-subtitle">
                    Your favourite foods delivered fast at your door.
                </p>
                <button>Sign In</button>
                <a href={'/auth/register'}>Test</a> {/* TODO ovo ukloniti */}
            </div>,
        }
    ]);

}