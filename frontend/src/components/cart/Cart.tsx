import CartFooter from '@components/cart/CartFooter.tsx';
import CartItems from '@components/cart/CartItems.tsx';
import { useCartContext } from '@hooks/useCartContext.ts';
import { Button, Card, CardContent, CardHeader, IconButton, Popover } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react';

export const Cart = () => {
    const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);

    const { cart, setCart } = useCartContext();

    const isCartEmpty = cart.length === 0;
    const cartItemsCount = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
    const cartTotalPrice = cart.reduce((acc, curr) => {
        return acc + curr.totalPrice;
    }, 0).toFixed(2);

    const handleOpenCart = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseCart = () => {
        setAnchorEl(null);
    };

    const isCartOpen = Boolean(anchorEl);
    const cartId = isCartOpen ? 'cart-popover' : undefined;

    const handleResetCart = () => {
        setCart([]);

        sessionStorage.removeItem('cart');
    };

    return (
        <>
            <IconButton
                onClick={handleOpenCart}
                aria-describedby={cartId}
                sx={{
                    color: 'primary.light'
                }}
            >
                <ShoppingCartIcon/>
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
                            onClick={handleResetCart}
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
                                ? <EmptyCartContent/>
                                : <CartItems />
                        }
                        <CartFooter
                            isCartEmpty={isCartEmpty}
                            cartTotalPrice={parseFloat(cartTotalPrice)}
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
