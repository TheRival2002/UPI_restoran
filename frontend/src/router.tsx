import { useRoutes } from 'react-router';
import LoginPage from './pages/auth/LoginPage.tsx';
import RegisterPage from './pages/auth/RegisterPage.tsx';
import LandingPage from './pages/landing/LandingPage.tsx';
//import c from './styles/homePage.module.css';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            children: [
                {
                    path: 'login',
                    element: <LoginPage/>,
                },
                {
                    path: 'register',
                    element: <RegisterPage/>,
                },
            ],
        },
        {
            path: '/',
            element:(<LandingPage/>)
            // element: ( // TODO ovo cemo izmijenit, imat cemo drugu komponentu za home page
            //     <div className={c.welcomeContainer}>
            //         <h1 className={c.welcomeHeader}>Welcome to FoodHub!</h1>
            //         <p className={c.welcomeSubtitle}>
            //             Your favourite foods delivered fast at your door.
            //         </p>
            //         <button
            //             onClick={() =>
            //                 (window.location.href = '/auth/register')
            //             }
            //         >
            //             Register
            //         </button>
            //         <button
            //             onClick={() => (window.location.href = '/auth/login')}
            //         >
            //             Login
            //         </button>
            //     </div>
            // ),
        },
    ]);
}
