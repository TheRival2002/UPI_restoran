
import { LoginPage, Page403, Page404, RegisterPage, LandingPage } from '@routes/elements.tsx';
import { Navigate, useRoutes } from 'react-router';
import { AuthLayout, CompactLayout } from './layouts';
import MainLayout from 'layouts/MainLayout';

// ----------------------------------------------------------------------

export default function Router() {
    return useRoutes([
        {
            path: 'auth',
            element: <AuthLayout />,
            children: [
                {
                    path: 'login',
                    element: <LoginPage />,
                },
                {
                    path: 'register',
                    element: <RegisterPage />,
                },
            ],
        },
        {           
            element:(<MainLayout />),
            path:'/',
            children: [
                {                  
                    index:true,  
                    element:<LandingPage />,
                }
            ]            
        },
        {
            element: <CompactLayout />,
            children: [
                { path: '404', element: <Page404 /> },
                { path: '403', element: <Page403 /> },
            ],
        },
        { path: '*', element: <Navigate to='/404' replace /> }, // guard all non-existing routes with 404 page
    ]);
}
