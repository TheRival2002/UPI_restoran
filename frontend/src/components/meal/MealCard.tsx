import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { paths } from '@routes/paths.ts';
import { PRICE_MULTIPLIER } from '@utils/constants.ts';
import { Link } from 'react-router';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------------------

type MealItemCardProps = {
    meal: Meal;
    isInDailyOffer?: boolean;
}

export default function MealCard({
    meal,
    isInDailyOffer = false,
}: MealItemCardProps) {
    return (
        <Link to={paths.meals.single(meal.id)} state={{ isInDailyOffer }}>
            <Card sx={{
                position: 'relative',
                borderRadius: '1em',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
                '&:hover': {
                    boxShadow: '0px 8px 20px 8px rgba(0, 0, 0, 0.25)',
                },
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
                        height: { xs: 140, sm: 200, md: 250 },
                        objectFit: 'cover',
                        borderRadius: '0.75em',
                        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 8,
                        left: 4,
                        backgroundColor: 'common.white',
                        py: 0.5,
                        px: 2,
                        borderRadius: '100vw',
                    }}
                >
                    <Typography variant={'subtitle1'} fontWeight={'bold'}>
                        {isInDailyOffer ? (meal.price * PRICE_MULTIPLIER).toPrecision(3) : meal.price}<Typography
                            variant={'subtitle1'}
                            component={'span'}
                            fontWeight={'inherit'}
                            color={'primary.main'}
                            ml={0.25}
                        >
                            €
                        </Typography>
                    </Typography>
                </Box>
                <CardContent>
                    <Typography
                        variant={'h5'}
                        sx={{
                            fontWeight: 'bold',
                            mb: meal.description ? 0.75 : 0,
                            display: '-webkit-box',
                            WebkitLineClamp: 1,
                            lineClamp: 1,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >{meal.name}</Typography>
                    <Typography
                        variant={'body2'}
                        sx={{
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            lineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {meal.description}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
}
