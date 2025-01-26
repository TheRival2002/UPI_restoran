import { createContext, useMemo, useState } from 'react';
import { Meal } from '../types/meal.ts';

type CartItem = {
    meal: Meal;
    quantity: number;
    totalPrice: number;
}

type CartContext = {
    cart: CartItem[];
    setCart: (cart: CartItem[]) => void;
    cartItem: CartItem | null;
    setCartItem: (cartItem: CartItem | null) => void;
}
export const CartContext = createContext<CartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [ cart, setCart ] = useState<CartItem[]>([]);
    const [ cartItem, setCartItem ] = useState<CartItem | null>(null);

    const memoizedValue = useMemo(() => ({
        cart,
        setCart,
        cartItem,
        setCartItem,
    }), [ cart, cartItem ]);
    return (
        <CartContext.Provider value={memoizedValue}>
            {children}
        </CartContext.Provider>
    );
};
