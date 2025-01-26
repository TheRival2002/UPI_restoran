import { Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// ----------------------------------------------------------------------

export default function AddToCartButton({ onClick }: {onClick: () => void}) {
    return (
        <Button
            onClick={onClick}
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
