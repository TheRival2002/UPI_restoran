import MealCard from '@components/meal/MealCard.tsx';
import CustomSnackbarAlert from '@components/snackbar/CustomSnackbarAlert.tsx';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MealsHeader from '@sections/meals/all/MealsHeader.tsx';
import api, { endpoints } from '@utils/axios.ts';
import { useEffect, useState } from 'react';
import { FetchState } from '../../../types/common.ts';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

export default function AllMeals() {
    const [ meals, setMeals ] = useState<Meal[]>([]);
    const [ mealsFetchingState, setMealsFetchingState ] = useState<FetchState>({
        isLoading: false,
        isError: false,
    });

    const handleCloseSnackbar = () => {
        setMealsFetchingState((prevState) => ({
            ...prevState,
            isError: false,
        }));
    };

    useEffect(() => {

        (async () => {

            setMealsFetchingState((prevState) => ({
                ...prevState,
                isLoading: true,
            }));

            try {

                const response = await api.get(endpoints.meals.all);

                setMeals(response.data);
                setMealsFetchingState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                }));

            } catch (error) {

                console.error(error);
                setMealsFetchingState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                    isError: true,
                }));

            }

        })();

    }, []);

    return (
        <Box mt={{ xs: 2, sm: 4 }} mb={{ xs: 6, sm: 8 }}>
            <CustomSnackbarAlert
                isOpen={mealsFetchingState.isError}
                onClose={handleCloseSnackbar}
                alertMessage={'Error fetching meals'}
                alertProps={{
                    severity: 'error',
                }}
            />

            <MealsHeader />

            <Grid
                container
                columnSpacing={{ xs: 2, sm: 3, lg: 4 }}
                rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
                mt={{ xs: 4, sm: 6 }}
            >
                {meals.map((meal) => (
                    <Grid key={meal.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <MealCard
                            meal={meal}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
