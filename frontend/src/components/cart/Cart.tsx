import c from './../../styles/cart.module.css';
import cartIcon from './../../assets/images/cart/cart-icon.svg';

export const Cart = () => {
    return <div className={c.cart}>
        <div className={c.cartItemsWrapper}>
            <div className={c.cartItem}>
                <span>Coca Cola</span>
                <span>€ 1.50</span>
                <span>3x</span>
            </div>
        </div>
        <img src={cartIcon} alt={'cart icon'} width={44} height={44}></img>
    </div>;
};
