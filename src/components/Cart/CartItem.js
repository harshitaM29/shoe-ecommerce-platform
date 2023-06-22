import classes from './CartItem.module.css'

const CartItem = props => {
    console.log(props);
    const price = `$${Number(props.price).toFixed(2)}`;

    return (
      <li className={classes['cart-item']}>
        <div>
          <h2>{props.name}</h2>
          <div className={classes.summary}>
            <span className={classes.price}>{price}</span>
            <span className={classes.amount}>xL {props.large}</span>
            <span className={classes.amount}>xM {props.mediium}</span>
            <span className={classes.amount}>xS {props.small}</span>
          </div>
        </div>
      
      </li>
    );

};

export default CartItem;