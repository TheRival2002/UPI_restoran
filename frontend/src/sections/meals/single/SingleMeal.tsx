import AddToCartButton from '@components/button/AddToCartButton.tsx';
import QuantityButtonGroup from '@components/button/QuantityButtonGroup.tsx';
import SingleMealCardImg from '@components/meal/SingleMealCardImg.tsx';
import { Box, Typography } from '@mui/material';
import SingleMealInfo from '@sections/meals/single/SingleMealInfo.tsx';
import { PRICE_MULTIPLIER } from '@utils/constants.ts';
import { useState } from 'react';
import { useLocation } from 'react-router';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

type SingleMealProps = {
    meal: Meal;
}

export default function SingleMeal({
    meal,
}: SingleMealProps) {
    // NAPOMENA - ovdje se drze podaci koji ce se poslat u kosaricu kad se napravi ta funkcionalnost (context kosarice) skupa s cijelim meal-om
    const [ mealQuantity, setMealQuantity ] = useState(1);

    const { state } = useLocation();
    const { isInDailyOffer } = state || {};

    const mealPrice = isInDailyOffer
        ? (meal.price * PRICE_MULTIPLIER).toPrecision(3)
        : meal.price;
    const mealTotalPrice = (Number(mealPrice) * mealQuantity).toPrecision(3);

    return (
        <Box
            pt={{ xs: 3, sm: 4 }}
            height={1}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'space-between'}
        >
            <Box
                display={'flex'}
                rowGap={3}
                columnGap={{ sm: 5, md: 8 }}
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretch', sm: 'center' }}
            >
                <SingleMealCardImg meal={meal} />

                <SingleMealInfo meal={meal}>
                    <Typography variant={'h5'} fontWeight={'bold'} color={'primary.main'}>
                        {mealTotalPrice}<Typography
                            variant={'h5'}
                            component={'span'}
                            fontWeight={'inherit'}
                            ml={0.25}
                        >
                            €
                        </Typography>
                    </Typography>

                    <QuantityButtonGroup
                        quantity={mealQuantity}
                        setQuantity={setMealQuantity}
                    />
                </SingleMealInfo>
            </Box>
            <Box
                mt={{ xs: 0, sm: 10 }}
                mb={{ xs: 6, sm: 6 }}
                display={'flex'}
                justifyContent={'center'}
            >
                <AddToCartButton />
            </Box>
        </Box>
    );
}
