import MealItemCard from '@components/meal/MealItemCard.tsx';
import CustomSnackbarAlert from '@components/snackbar/CustomSnackbarAlert.tsx';
import { Box, Stack, Typography } from '@mui/material';
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
        <Box mt={2} mb={4}>
            <CustomSnackbarAlert
                isOpen={mealsFetchState.isError}
                onClose={handleCloseSnackbar}
                alertMessage={'Error fetching meals'}
                alertProps={{
                    severity: 'error',
                }}
            />
            <Typography // TODO sliku stavit
                variant={'h3'}
                component={'h1'}
                fontWeight={800}
                color={'text.primary'}
            >
                All <Typography
                    variant={'h3'}
                    component={'span'}
                    display={'block'}
                    fontWeight={'inherit'}
                    color={'primary.main'}
                >
                    Meals
                </Typography>
            </Typography>
            <Stack spacing={2} mt={4}>
                {meals.map((meal) => (
                    <MealItemCard
                        key={meal.id}
                        meal={meal}
                    />
                ))}
            </Stack>
        </Box>
    );
}
