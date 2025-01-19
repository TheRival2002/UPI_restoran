import { Stack, Typography } from '@mui/material';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

type SingleMealInfoProps = {
    meal: Meal;
}

export default function SingleMealInfo({
    meal,
}: SingleMealInfoProps) {
    return (
        <Stack
            spacing={1}
        >
            <Typography variant={'h4'} fontWeight={'bold'}>
                {meal.name}
            </Typography>

            <Typography variant={'h5'} fontWeight={'bold'} color={'primary.main'}>
                {meal.price}<Typography
                    variant={'h5'}
                    component={'span'}
                    fontWeight={'inherit'}
                    ml={0.25}
                >
                €
                </Typography>
            </Typography>

            <Typography
                variant={'body2'}
                color={'text.secondary'}
                minHeight={{ xs: 100, sm: 0 }}
            >
                {meal.description}
            </Typography>
        </Stack>
    );
}
