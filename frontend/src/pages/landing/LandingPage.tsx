import { Helmet } from 'react-helmet-async';
import Landing from '@sections/landingPage/Landing';

export default function LandingPage(){
    return(
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Landing />
        </>
    );
}
