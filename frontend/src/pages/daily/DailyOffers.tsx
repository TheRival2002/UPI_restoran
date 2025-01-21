import { Helmet } from 'react-helmet-async';
import DailyOffer from '@sections/daily/DailyOffer';

export default function DailyOffers(){
    return(
        <>
            <Helmet>
                <title>Daily Offers</title>
            </Helmet>

            <DailyOffer />
        </>
    );
}