import { Helmet } from 'react-helmet-async';
import DailyOffer from '@sections/daily/DailyOffer';

export default function DailyOffersPage(){
    return(
        <>
            <Helmet>
                <title>Daily Offers</title>
            </Helmet>

            <DailyOffer />
        </>
    );
}