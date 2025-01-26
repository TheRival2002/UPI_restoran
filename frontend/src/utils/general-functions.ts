import { PRICE_MULTIPLIER } from '@utils/constants.ts';

// ----------------------------------------------------------------------

export const getDiscountedPrice = (price: number, discount?: number): number => {
    const priceDiscount = discount || PRICE_MULTIPLIER;

    return Number((price * priceDiscount).toPrecision(3));
};
