import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import Card from '../UI/Card';

import classes from './ProductItem.module.css';

const ProductItem = (props) => {
    const dispatch = useDispatch();
    const { id, name, quantity, price, totalPrice, description} = props;

    const addToCartHandler = () => {
        const newItem = { id, name, quantity, price, totalPrice};
        dispatch( cartActions.add(newItem));
    };

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{name}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
