import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const dispatch = useDispatch();
    const { id, name, quantity, price, totalPrice} = props.item;
    
    const removeItemHandler = () => {
        dispatch( cartActions.remove(id));
    };

    const addItemHandler = () => {
        const newItem = { id, name, quantity, price, totalPrice};
        dispatch( cartActions.add(newItem));
    };

    return (
        <li key={id} id={id} className={classes.item}>
            <header>
                <h3>{name}</h3>
                <div className={classes.price}>
                    ${totalPrice.toFixed(2)}{' '}
                    <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
