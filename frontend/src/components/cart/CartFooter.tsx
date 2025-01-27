import { Box, Button, Stack, Typography } from '@mui/material';

// ------------------------------------------------------------

export default function CartFooter({
    isCartEmpty,
    cartTotalPrice,
}: { isCartEmpty: boolean, cartTotalPrice: number }) {
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
                // onClick={} // OVDE TI IDE FUNKCIJA ZA CHECKOUT
                sx={{
                    color: 'common.white',
                }}
            >
                Checkout
            </Button>
        </Stack>
    );
}
