import LoadingScreen from '@components/loading/LoadingScreen.tsx';
import { ElementType, lazy, Suspense } from 'react';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
    (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    );

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('@pages/auth/LoginPage.tsx')));
export const RegisterPage = Loadable(lazy(() => import('@pages/auth/RegisterPage.tsx')));
// LANDING PAGE
export const LandingPage = Loadable(lazy(() => import('@pages/landing/LandingPage.tsx')));
// ERROR
export const Page403 = Loadable(lazy(() => import('@pages/error/Page403.tsx')));
export const Page404 = Loadable(lazy(() => import('@pages/error/Page404.tsx')));
