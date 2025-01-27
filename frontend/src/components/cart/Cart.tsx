import QuantityButtonGroup from '@components/button/QuantityButtonGroup.tsx';
import { useCartContext } from '@hooks/useCartContext.ts';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Popover,
    Stack,
    Typography
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';

export const Cart = () => {
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const { cart } = useCartContext();

    const isCartEmpty = cart.length === 0;
    const cartItemsCount = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
    const cartTotalPrice = cart.reduce((acc, curr) => {
        return acc + curr.totalPrice;
    }, 0);

    const handleOpenCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseCart = () => {
        setAnchorEl(null);
    };

    const isCartOpen = Boolean(anchorEl);
    const cartId = isCartOpen ? 'cart-popover' : undefined;

    return (
        <>
            <IconButton
                onClick={handleOpenCart}
                aria-describedby={cartId}
                sx={{
                    color: 'primary.light'
                }}
            >
                <ShoppingCartIcon />
            </IconButton>
            <Popover
                id={cartId}
                open={isCartOpen}
                anchorEl={anchorEl}
                onClose={handleCloseCart}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{
                    mt: 1.5,
                }}
            >
                <Card sx={{ width: { xs: '92vw', sm: 450 }}}>
                    <CardHeader
                        title={`Cart (${cartItemsCount})`}
                        action={<Button
                            // onClick={handleRemoveAllFromCart} // OVDJE TI IDE FUNKCIJA ZA UKLONIT SVE IZ CART-a
                            disabled={isCartEmpty}
                            sx={{
                                textTransform: 'none',
                            }}
                        >
                            Remove all
                        </Button>}
                    />
                    <CardContent sx={{ paddingTop: 1 }}>
                        {
                            isCartEmpty
                                ? <EmptyCartContent />
                                : <CartItemsContent />
                        }
                        <CartFooter
                            isCartEmpty={isCartEmpty}
                            cartTotalPrice={cartTotalPrice}
                        />
                    </CardContent>
                </Card>
            </Popover>
        </>
    );
};

// ------------------------------------------------------------

function EmptyCartContent() {
    return (
        <div>
            <p>Your cart is empty.</p>
        </div>
    );
}

// ------------------------------------------------------------

function CartItemsContent() {
    const { cart } = useCartContext();

    return (
        <Stack spacing={1}>
            {cart.map((cartItem) => (
                <Box
                    key={cartItem.meal.id}
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
                        setQuantity={() => console.log('set quantity')} // ovde napravi logiku za kolicinu jela, i ako dode na nula da se makne jelo
                    />
                </Box>
            ))}
        </Stack>
    );
}

// ------------------------------------------------------------

function CartFooter({
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
