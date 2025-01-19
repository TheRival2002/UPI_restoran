import MealItemCard from '@components/meal/MealItemCard.tsx';
import CustomSnackbarAlert from '@components/snackbar/CustomSnackbarAlert.tsx';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import api, { endpoints } from '@utils/axios.ts';
import { useEffect, useState } from 'react';
import { FetchState } from '../../../types/common.ts';
import { Meal } from '../../../types/meal.ts';

// ----------------------------------------------------------------------

export default function AllMeals() {
    const [ meals, setMeals ] = useState<Meal[]>([]);
    const [ mealsFetchState, setMealsFetchState ] = useState<FetchState>({
        isLoading: false,
        isError: false,
    });

    const handleCloseSnackbar = () => {
        setMealsFetchState((prevState) => ({
            ...prevState,
            isError: false,
        }));
    };

    useEffect(() => {

        (async () => {

            setMealsFetchState((prevState) => ({
                ...prevState,
                isLoading: true,
            }));

            try {

                const response = await api.get(endpoints.meals.all);

                setMeals(response.data);
                setMealsFetchState((prevState) => ({
                    ...prevState,
                    isLoading: false,
                }));

            } catch (error) {

                console.error(error);
                setMealsFetchState((prevState) => ({
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
                isOpen={mealsFetchState.isError}
                onClose={handleCloseSnackbar}
                alertMessage={'Error fetching meals'}
                alertProps={{
                    severity: 'error',
                }}
            />

            <Typography
                variant={'h2'}
                component={'h1'}
                fontWeight={800}
                color={'text.primary'}
                textAlign={{ xs: 'start', sm: 'center' }}
            >
                All <Typography
                    variant={'h2'}
                    component={'span'}
                    display={{ xs: 'block', sm: 'inline' }}
                    fontWeight={'inherit'}
                    color={'primary.main'}
                >
                    Meals
                </Typography>
            </Typography>

            <Grid
                container
                columnSpacing={{ xs: 2, sm: 3, lg: 4 }}
                rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
                mt={{ xs: 4, sm: 6 }}
            >
                {meals.map((meal) => (
                    <Grid key={meal.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <MealItemCard
                            meal={meal}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
