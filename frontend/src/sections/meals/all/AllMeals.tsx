import MealCard from '@components/meal/MealCard.tsx';
import CustomSnackbarAlert from '@components/snackbar/CustomSnackbarAlert.tsx';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MealsHeader from '@sections/meals/all/MealsHeader.tsx';
import api, { endpoints } from '@utils/axios.ts';
import { useEffect, useState } from 'react';
import { FetchState } from '../../../types/common.ts';
import { Meal } from '../../../types/meal.ts';
import c from './../../../styles/allMeals.module.css';
import filterIcon from './../../../assets/images/meals/filter-icon.png';
import { useFilteredMeals } from '@hooks/useFilteredMeals.ts';
import soupIcon from './../../../assets/images/meals/soup.png';
import meatIcon from './../../../assets/images/meals/meat.png';
import dessertIcon from './../../../assets/images/meals/dessert.png';
import drinksIcon from './../../../assets/images/meals/drinks.png';
import FilterCard from '@components/filterCard/FilterCard.tsx';

// ----------------------------------------------------------------------

const filterCards = [
    {
        id: 1,
        imgUrl: soupIcon,
        name: 'Appetizers',
    },
    {
        id: 2,
        imgUrl: meatIcon,
        name: 'Main',
    },
    {
        id: 3,
        imgUrl: dessertIcon,
        name: 'Desserts',
    },
    {
        id: 4,
        imgUrl: drinksIcon,
        name: 'Drinks',
    }
];

export default function AllMeals() {
    const [ allMeals, setAllMeals ] = useState<Meal[]>([]);
    const [ mealsFetchingState, setMealsFetchingState ] = useState<FetchState>({
        isLoading: false,
        isError: false,
    });
    const [ filtersAreOpen, setFiltersAreOpen ] = useState(false);
    const { searchValue, setSearchValue, filteredMeals, selectedFilter, setSelectedFilter } = useFilteredMeals(allMeals);

    const handleCloseSnackbar = () => {
        setMealsFetchingState((prevState) => ({
            ...prevState,
            isError: false,
        }));
    };

    const handleFilterCardClick = (clickedCard: number) => {
        if (selectedFilter === clickedCard) {
            setSelectedFilter(null);
        } else {
            setSelectedFilter(clickedCard);
        }

    };

    const handleFilterIconClick = () => {
        if (selectedFilter) {
            setSelectedFilter(null);
        }

        setFiltersAreOpen(!filtersAreOpen);

    };

    useEffect(() => {

        (async () => {

            setMealsFetchingState((prevState) => ({
                ...prevState,
                isLoading: true,
            }));

            try {

                const response = await api.get(endpoints.meals.all);

                setAllMeals(response.data);
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

            <MealsHeader/>

            <div className={c.searchBarWrapper}>
                <input type={'text'} className={c.mealsSearchBar}
                    placeholder={'Search meals by name'}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}></input>
                <img
                    src={filterIcon}
                    alt={'filter icon'}
                    width={38}
                    height={38}
                    onClick={handleFilterIconClick}
                />
            </div>

            {filtersAreOpen && (
                <div className={c.filterCardsWrapper}>
                    {filterCards.map((filterCard) => (
                        <FilterCard
                            key={filterCard.name}
                            imgUrl={filterCard.imgUrl}
                            name={filterCard.name}
                            onClick={() => handleFilterCardClick(filterCard.id)}
                            isClicked={selectedFilter === filterCard.id}
                        />
                    ))}

                </div>
            )}
            <Grid
                container
                columnSpacing={{ xs: 2, sm: 3, lg: 4 }}
                rowSpacing={{ xs: 2, sm: 3, lg: 4 }}
                mt={{ xs: 4, sm: 6 }}
            >
                {filteredMeals.map((meal) => (
                    <Grid key={meal.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                        <MealCard
                            meal={meal}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
    ;
}
