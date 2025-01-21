import MealCard from '@components/meal/MealCard';
import api, { endpoints } from '@utils/axios';
import { useEffect, useState } from 'react';
import { FetchState } from 'types/common';
import { Meal } from 'types/meal';

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
            <h1>Daily Offers</h1>
            {meals.map((meal) => (
                <MealCard
                    meal={meal}
                />
            ))}           
          
        </div>
    );
}
