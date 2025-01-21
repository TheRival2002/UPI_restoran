import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

type SingleMealInfoProps = {
    meal: Meal;
    children?: ReactNode;
}

export default function SingleMealInfo({
    meal,
    children,
}: SingleMealInfoProps) {
    return (
        <Stack
            spacing={1}
        >
            <Typography variant={'h4'} fontWeight={'bold'}>
                {meal.name}
            </Typography>

            <Box
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
            >
                {children}
            </Box>

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
