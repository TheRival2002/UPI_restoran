import { Box, Typography, Button } from '@mui/material';
// import { useNavigate } from "react-router-dom";
import styles from '../../styles/successfullPayment.module.css';
import verifiedIcon from '../../assets/images/verified_icon.png';
import logo from '../../assets/images/landingPageImgs/Logo.svg';

// ----------------------------------------------------------

export default function SuccessfullPayment() {
    // const navigate = useNavigate();

    const handleContinueShopping = () => {
        // navigate("/");
    };

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
            >
                Continue shopping
            </Button>
        </Box>
    );
}
