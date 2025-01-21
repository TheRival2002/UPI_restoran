import MealCard from '@components/meal/MealCard';
import api, { endpoints } from '@utils/axios';
import { useEffect, useState } from 'react';
import { FetchState } from 'types/common';
import { Meal } from 'types/meal';
import Grid from '@mui/material/Grid2';
import { Box } from '@mui/material';

export default function DailyOffer() {
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
                const response = await api.get(endpoints.meals.daily);
                setMeals(response.data.offers); // Access 'offers' from the response
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

    if (mealsFetchingState.isLoading) {
        return <p>Loading...</p>;
    }

    if (mealsFetchingState.isError) {
        return (
            <div>
                <p>Error fetching daily meals.</p>
                <button onClick={handleCloseSnackbar}>Close</button>
            </div>
        );
    }

    return (
        <div className="container">
            <Box mt={{ xs: 2, sm: 4 }} mb={{ xs: 6, sm: 8 }}>
                
                <h1>Daily Offer</h1>
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
        </div>
    );
}
