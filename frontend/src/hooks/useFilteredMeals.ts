import { Meal } from '../types/meal.ts';
import { useEffect, useState } from 'react';

export const useFilteredMeals = (allMeals: Meal[]) => {
    const [ searchValue, setSearchValue ] = useState('');
    const [ filteredMeals, setFilteredMeals ] = useState<Meal[]>([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchValue.trim() === '') {
                setFilteredMeals(allMeals);
            } else {
                setFilteredMeals(
                    allMeals.filter((meal) =>
                        meal.name.toLowerCase().includes(searchValue.toLowerCase())
                    )
                );
            }
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [ searchValue, allMeals ]);

    return { searchValue, setSearchValue, filteredMeals };
};
