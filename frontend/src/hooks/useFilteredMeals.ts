import { Meal } from '../types/meal.ts';
import { useEffect, useState } from 'react';

export const useFilteredMeals = (allMeals: Meal[]) => {
    const [ searchValue, setSearchValue ] = useState('');
    const [ selectedFilter, setSelectedFilter ] = useState<number | null>(null);
    const [ filteredMeals, setFilteredMeals ] = useState<Meal[]>([]);

    useEffect(() => {
        let filtered = allMeals;

        if (selectedFilter) {
            filtered = filtered.filter((meal) => meal.meal_category_id == selectedFilter);
        }

        if (searchValue.trim() !== '') {
            filtered = filtered.filter((meal) =>
                meal.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        setFilteredMeals(filtered);
    }, [ searchValue, selectedFilter, allMeals ]);

    return { searchValue, setSearchValue, filteredMeals, selectedFilter, setSelectedFilter };
};
