import { Meal } from '../../entities/Meal';  // Ovdje importamo Meal iz pravilnog direktorija


// Mock podaci koji odgovaraju tipovima
export const mockMeal: Meal = {
    id: 1,
    name: "Grilled Chicken",
    description: "A delicious grilled chicken with vegetables.",
    price: 12.99,
    mealCategoryId: 1,  // Ovdje je mealCategoryId obavezan
};
