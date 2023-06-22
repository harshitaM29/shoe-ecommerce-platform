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
          
          </div>
          <div>
          <span className={classes.amount}>{props.large} L</span>
          <span className={classes.amount}>{props.medium} M</span>
          <span className={classes.amount}>{props.small} s</span>
          </div>
        </div>
      
      </li>
    );

};

export default CartItem;