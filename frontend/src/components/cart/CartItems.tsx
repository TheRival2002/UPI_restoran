import QuantityButtonGroup from '@components/button/QuantityButtonGroup.tsx';
import { useCartContext } from '@hooks/useCartContext.ts';
import { Box, Divider, Stack, Typography } from '@mui/material';
import { Fragment } from 'react';

// ----------------------------------------------------------------------

export default function CartItems() {
    const { cart, setCart } = useCartContext();

    const handleSetQuantity = (mealId: number, newQuantity: number) => {
        const updatedCart = cart.map((item) => {
            if (item.meal.id === mealId) {
                return {
                    ...item,
                    quantity: newQuantity,
                    totalPrice: item.meal.price * newQuantity,
                };
            }
            return item;
        }).filter(item => item.quantity > 0);

        setCart(updatedCart);

        sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <Stack spacing={2}>
            {cart.map((cartItem, index) => (
                <Fragment key={cartItem.meal.id}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1.5,
                            }}
                        >
                            <img
                                src={`/images/meals/${cartItem.meal.image}`}
                                alt={cartItem.meal.name}
                                style={{
                                    width: 75,
                                    height: 75,
                                    borderRadius: '0.5em',
                                }}
                            />
                            <Box>
                                <Typography variant={'h6'} fontWeight={700}>
                                    {cartItem.meal.name}
                                </Typography>
                                <Typography
                                    variant={'body1'}
                                    color={'text.secondary'}
                                >
                                    {cartItem.meal.price}€
                                </Typography>
                            </Box>
                        </Box>
                        <QuantityButtonGroup
                            quantity={cartItem.quantity}
                            setQuantity={(newQuantity) => handleSetQuantity(cartItem.meal.id, newQuantity)}
                        />
                    </Box>
                    {index < cart.length - 1 && <Divider/>}
                </Fragment>
            ))}
        </Stack>
    );
}
