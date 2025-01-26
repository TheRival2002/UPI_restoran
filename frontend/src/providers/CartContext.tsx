import { createContext, useState } from 'react';
import { Meal } from '../types/meal.ts';

type CartItem = {
    meal: Meal;
    quantity: number;
    totalPrice: number;
}
export const CartContext = createContext(null);

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const [ cart, setCart ] = useState<CartItem[]>([]);
    const [ cartItem, setCartItem ] = useState<CartItem | null>(null);

    return (
        <CartContext.Provider value={null}>
            {children}
        </CartContext.Provider>
    );
};
