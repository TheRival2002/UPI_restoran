import { Meal } from '../types/meal.ts';
import { useEffect, useState } from 'react';

export const useFilteredMeals = (allMeals: Meal[]) => {
    const [ searchValue, setSearchValue ] = useState('');
    const [ selectedFilter, setSelectedFilter ] = useState<number | null>(null);
    const [ filteredMeals, setFilteredMeals ] = useState<Meal[]>([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            let filtered = allMeals;

            if (selectedFilter != null) {
                filtered = filtered.filter((meal) => meal.mealCategoryId == selectedFilter);
            }

            if (searchValue.trim() !== '') {
                filtered = filtered.filter((meal) =>
                    meal.name.toLowerCase().includes(searchValue.toLowerCase())
                );
            }

            setFilteredMeals(filtered);
        }, 200);

        return () => clearTimeout(timeoutId);
    }, [ searchValue, selectedFilter, allMeals ]);

    return { searchValue, setSearchValue, filteredMeals, selectedFilter, setSelectedFilter };
};
