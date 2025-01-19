import { Box } from '@mui/material';
import AllMeals from '@sections/meals/all/AllMeals.tsx';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------

export default function AllMealsPage(){
    return(
        <>
            <Helmet>
                <title>Meals</title>
            </Helmet>

            <Box className={'container'}>
                <AllMeals />
            </Box>
        </>
    );
}
