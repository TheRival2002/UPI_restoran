import { Box } from '@mui/material';
import SuccessfullPayment from '@sections/payment/SuccessfullPayment';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------

export default function PaymentPage() {
    return (
        <>
            <Helmet>
                <title>Payment Successful</title>
            </Helmet>

            <Box className={'container'}>
                <SuccessfullPayment />
            </Box>
        </>
    );
}
