import { Box } from '@mui/material';
import SingleMeal from '@sections/meals/single/SingleMeal.tsx';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

// ----------------------------------------------------------

export default function SingleMealPage(){
    const { id } = useParams();

    return(
        <>
            <Helmet>
                <title>Meal - {id}</title>
            </Helmet>

            <Box className={'container'}>
                <SingleMeal mealId={id ? Number(id) : 0} />
            </Box>
        </>
    );
}
