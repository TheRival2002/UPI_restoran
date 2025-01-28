import { useAuthContext } from '@hooks/useAuthContext.ts';
import { Box, Button, Stack, Typography } from '@mui/material';
import { paths } from '@routes/paths.ts';
import { useNavigate } from 'react-router';

// ------------------------------------------------------------

export default function CartFooter({
    isCartEmpty,
    cartTotalPrice,
}: { isCartEmpty: boolean, cartTotalPrice: number }) {
    const { user } = useAuthContext();

    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!user) {
            navigate(paths.auth.login, { state: { checkoutCart: true }});

            return;
        }

        navigate(paths.payment.root);
    };

    return (
        <Stack spacing={1.5} mt={3}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant={'subtitle1'} color={'text.disabled'}>
                    TOTAL:
                </Typography>
                <Typography variant={'h5'} color={'primary.main'}>
                    {cartTotalPrice}€
                </Typography>
            </Box>
            <Button
                variant={'contained'}
                fullWidth
                disabled={isCartEmpty}
                onClick={handleCheckout}
                sx={{
                    color: 'common.white',
                }}
            >
                Checkout
            </Button>
        </Stack>
    );
}
