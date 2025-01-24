import LoadingScreen from '@components/loading/LoadingScreen.tsx';
import CustomSnackbarAlert from '@components/snackbar/CustomSnackbarAlert.tsx';
import { Box } from '@mui/material';
import SingleMeal from '@sections/meals/single/SingleMeal.tsx';
import api, { endpoints } from '@utils/axios.ts';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import { FetchState } from '../../types/common.ts';
import { Meal } from '../../types/meal.ts';

// ----------------------------------------------------------

export default function SingleMealPage(){
    const [ meal, setMeal ] = useState<Meal | null>(null);
    const [ mealFetchingState, setMealFetchingState ] = useState<FetchState>({
        isLoading: false,
        isError: false,
    });

    const { id } = useParams();

    useEffect(() => {

        (async () => {

            if (!id) {
                setMealFetchingState((prevState) => ({
                    ...prevState,
                    isError: true,
                }));

                return;
            }

            setMealFetchingState((prevState) => ({
                ...prevState,
                isLoading: true,
            }));

            try {

                const response = await api.get(endpoints.meals.single(Number(id)));

                setMeal(response.data);
                setMealFetchingState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                }));

            } catch (error) {

                console.error(error);
                setMealFetchingState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    isError: true,
                }));

            }
        })();

    }, []);

    if (mealFetchingState.isLoading) {
        return (
            <LoadingScreen />
        );
    }

    return(
        <>
            <Helmet>
                <title>Meal - {id}</title>
            </Helmet>

            <CustomSnackbarAlert
                isOpen={mealFetchingState.isError}
                onClose={() => setMealFetchingState((prevState) => ({
                    ...prevState,
                    isError: false,
                }))}
                alertMessage={'Error fetching meals'}
                alertProps={{
                    severity: 'error',
                }}
            />
            <Box className={'container'}>
                {meal && (
                    <SingleMeal meal={meal} />
                )}
            </Box>
        </>
    );
}
