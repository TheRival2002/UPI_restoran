import AddToCartButton from '@components/button/AddToCartButton.tsx';
import SingleMealCardImg from '@components/meal/SingleMealCardImg.tsx';
import { Box } from '@mui/material';
import SingleMealInfo from '@sections/meals/single/SingleMealInfo.tsx';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

type SingleMealProps = {
    mealId: number;
}

export default function SingleMeal({
    mealId,
}: SingleMealProps) {
    // TODO maknit hardkodirano i fetchati meal sa mealId kad bude napravljen API
    const meal: Meal = {
        id: 1,
        name: 'Spring Rolls',
        description: 'Crispy rolls filled with vegetables and served with sweet chili sauce.',
        price: 10.99,
        image: 'spring_rolls.jpeg',
        mealCategoryId: 1,
    };
    console.log(mealId);

    return (
        <>
            <Box
                mt={{ xs: 3, sm: 4 }}
                display={'flex'}
                rowGap={3}
                columnGap={{ sm: 5, md: 8 }}
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'stretch', sm: 'center' }}
            >
                <SingleMealCardImg meal={meal} />

                <SingleMealInfo meal={meal} />
            </Box>
            <Box
                mt={{ xs: 0, sm: 10 }}
                mb={{ xs: 6, sm: 6 }}
                display={'flex'}
                justifyContent={'center'}
            >
                <AddToCartButton />
            </Box>
        </>
    );
}
