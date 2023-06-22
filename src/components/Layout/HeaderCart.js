import classes from './HeaderCart.module.css'
import CartIcon from '../Cart/CartIcon';
import { Fragment, useContext} from 'react';
import TshirtContext from '../../store/tshirt-context';


const HeaderCart = props => {
    const cartCtx = useContext(TshirtContext);
    let quantity = 0;
    cartCtx.receivedItems.forEach(product => {
        quantity = quantity + Number(product.quantity);
    })
    return (
        <Fragment>
       <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{ cartCtx.receivedItems.length}</span>

       </button>
       </Fragment>
    )
}

export default HeaderCart;