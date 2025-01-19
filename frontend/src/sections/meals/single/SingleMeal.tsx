import SingleMealCardImg from '@components/meal/SingleMealCardImg.tsx';
import { Box } from '@mui/material';
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
        description: 'A delicious plate of spaghetti',
        price: 10.99,
        image: 'spring_rolls.jpeg',
        mealCategoryId: 1,
    };
    console.log(mealId);

    return (
        <Box mt={{ xs: 2, sm: 4 }} mb={{ xs: 6, sm: 8 }}>
            <SingleMealCardImg meal={meal} />
        </Box>
    );
}
