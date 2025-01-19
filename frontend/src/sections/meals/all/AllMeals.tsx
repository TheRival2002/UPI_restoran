import CustomSnackbarAlert from '@components/snackbar/customSnackbarAlert.tsx';
import { Stack, Typography } from '@mui/material';
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
        <>
            <CustomSnackbarAlert
                isOpen={mealsFetchState.isError}
                onClose={handleCloseSnackbar}
                alertMessage={'Error fetching meals'}
                alertProps={{
                    severity: 'error',
                }}
            />
            <Stack spacing={2} my={2}>
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
            </Stack>
        </>
    );
}
