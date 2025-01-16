import AllMeals from '@sections/meals/all/AllMeals.tsx';
import { Helmet } from 'react-helmet-async';

// ----------------------------------------------------------

export default function AllMealsPage(){
    return(
        <>
            <Helmet>
                <title>Meals</title>
            </Helmet>

            <AllMeals />
        </>
    );
}
