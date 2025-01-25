import { Box } from '@mui/material';
import SingleMeal from '@sections/meals/single/SingleMeal.tsx';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------

export default function SingleMealPage() {
    const { id } = useParams();

    // TODO maknit hardkodirano i fetchati meal sa mealId kad bude napravljen API
    const meal: Meal = {
        id: 1,
        name: 'Spring Rolls',
        description: 'Crispy rolls filled with vegetables and served with sweet chili sauce.',
        price: 10.99,
        image: 'spring_rolls.jpeg',
        meal_category_id: 1,
    };

    return (
        <>
            <Helmet>
                <title>Meal - {id}</title>
            </Helmet>

            <Box className={'container'}>
                <SingleMeal meal={meal}/>
            </Box>
        </>
    );
}
