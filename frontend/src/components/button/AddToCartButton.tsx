import { useCartContext } from '@hooks/useCartContext.ts';
import { Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartItem } from '../../types/cart.dto.ts';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------------------

type AddToCartButtonProps = {
    meal: Meal;
    mealQuantity: number;
    mealTotalPrice: string;
}

export default function AddToCartButton({
    meal,
    mealQuantity,
    mealTotalPrice,
}: AddToCartButtonProps) {

    const { cart, setCart } = useCartContext();

    const handleAddToCart = () => {

        const existingCartItemIndex = cart.findIndex(
            (item) => item.meal.id === meal.id
        );

        const mealIsAlreadyInCart = existingCartItemIndex !== -1;

        if (!mealIsAlreadyInCart) {
            const currentCartItem: CartItem = {
                meal,
                quantity: mealQuantity,
                totalPrice: +mealTotalPrice,
            };

            setCart([ ...cart, currentCartItem ]);

            sessionStorage.setItem('cart', JSON.stringify([ ...cart, currentCartItem ]));
            return;
        }
        const updatedCart = [ ...cart ];
        const existingCartItem = updatedCart[existingCartItemIndex];

        updatedCart[existingCartItemIndex] = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + mealQuantity,
            totalPrice: Math.round(existingCartItem.totalPrice + +mealTotalPrice),
        };

        setCart(updatedCart);

        sessionStorage.setItem('cart', JSON.stringify(updatedCart));

    };

    return (
        <Button
            onClick={handleAddToCart}
            variant={'contained'}
            color={'primary'}
            fullWidth
            size={'large'}
            startIcon={<Box sx={{
                bgcolor: 'common.white',
                color: 'primary.main',
                borderRadius: '100%',
                height: 36,
                width: 36,
                display: 'grid',
                placeContent: 'center',
            }}>
                <ShoppingCartIcon />
            </Box>}
            sx={{
                borderRadius: '100vw',
                height: 54,
                p: 1.5,
                pr: 3,
                color: 'common.white',
                width: 'fit-content',
                '& .MuiButton-icon': {
                    mr: 1.5,
                },
            }}
        >
            Add to Cart
        </Button>
    );
}
