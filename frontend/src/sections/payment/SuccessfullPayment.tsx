import { useCartContext } from '@hooks/useCartContext.ts';
import { Box, Typography, Button } from '@mui/material';
import { paths } from '@routes/paths.ts';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styles from '../../styles/successfullPayment.module.css';
import verifiedIcon from '../../assets/images/verified_icon.png';
import logo from '../../assets/images/landingPageImgs/Logo.svg';

// ----------------------------------------------------------

export default function SuccessfullPayment() {
    const navigate = useNavigate();

    const { setCart } = useCartContext();

    const handleContinueShopping = () => {
        navigate(paths.meals.root);
    };

    useEffect(() => {
        setCart([]);

        sessionStorage.removeItem('cart');
    }, []);

    return (
        <Box className={styles.paymentWrapper}>
            <img src={logo} alt="Icon" className={styles.logo} />
            <img
                src={verifiedIcon}
                alt="Verified"
                className={styles.verifiedIcon}
            />
            <Typography variant="h4" className={styles.successfulPaymentTitle}>
                Payment Successful!
            </Typography>
            <Typography
                variant="body1"
                className={styles.successfulPaymentText}
            >
                Thank you for your order. Your payment has been processed
                successfully.
            </Typography>
            <Button
                className={styles.paymentButton}
                onClick={handleContinueShopping}
                sx={{
                    textTransform: 'none',
                }}
            >
                Continue shopping
            </Button>
        </Box>
    );
}
