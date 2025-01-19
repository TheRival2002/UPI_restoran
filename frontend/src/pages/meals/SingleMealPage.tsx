import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

// ----------------------------------------------------------

export default function SingleMealPage(){
    const { id } = useParams();
    console.log(id);

    return(
        <>
            <Helmet>
                <title>Meal</title>
            </Helmet>

            <Box className={'container'}>
                Meal
            </Box>
        </>
    );
}
