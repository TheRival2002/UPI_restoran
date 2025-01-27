import { createContext, useMemo, useState } from 'react';
import { CartItem } from '../types/cart.dto.ts';

type CartContext = {
    cart: CartItem[];
    setCart: (cart: CartItem[]) => void;
}
export const CartContext = createContext<CartContext | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [ cart, setCart ] = useState<CartItem[]>([]);

    const memoizedValue = useMemo(() => ({
        cart,
        setCart,
    }), [ cart, setCart ]);
    return (
        <CartContext.Provider value={memoizedValue}>
            {children}
        </CartContext.Provider>
    );
};
