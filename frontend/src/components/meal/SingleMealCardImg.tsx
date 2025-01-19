import GoBackButton from '@components/button/GoBackButton.tsx';
import { Box, Card, CardMedia } from '@mui/material';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------------------

type SingleMealCardImgProps = {
    meal: Meal;
}

export default function SingleMealCardImg({
    meal,
}: SingleMealCardImgProps) {
    return (
        <Card sx={{
            position: 'relative',
            borderRadius: '1em',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
        }}>
            <CardMedia
                component={'img'}
                image={`/images/meals/${meal.image}`}
                title={meal.name}
                alt={meal.name}
                onError={(e) => {
                    e.currentTarget.src = '/images/meals/no_meal.png';
                }}
                sx={{
                    height: { xs: 200, md: 250 },
                    objectFit: 'cover',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                }}
            >
                <GoBackButton />
            </Box>
        </Card>
    );
}
