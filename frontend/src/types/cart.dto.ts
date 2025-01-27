import { Meal } from './meal.ts';

export type CartItem = {
    meal: Meal;
    quantity: number;
    totalPrice: number;
}
