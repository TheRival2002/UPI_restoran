import { Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default function MealsHeader() {
    return (
        <Typography
            variant={'h2'}
            component={'h1'}
            fontWeight={800}
            color={'text.primary'}
            textAlign={{ xs: 'start', sm: 'center' }}
        >
            All <Typography
                variant={'h2'}
                component={'span'}
                display={{ xs: 'block', sm: 'inline' }}
                fontWeight={'inherit'}
                color={'primary.main'}
            >
            Meals
            </Typography>
        </Typography>
    );
}
