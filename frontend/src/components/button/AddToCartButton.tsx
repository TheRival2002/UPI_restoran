import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// ----------------------------------------------------------------------

export default function AddToCartButton() {
    return (
        <Button
            variant={'contained'}
            color={'primary'}
            fullWidth
            size={'large'}
            startIcon={<ShoppingCartIcon />}
            sx={{
                borderRadius: '100vw',
                height: 54,
                color: 'common.white',
                width: 'fit-content',
            }}
        >
            Add to Cart
        </Button>
    );
}
