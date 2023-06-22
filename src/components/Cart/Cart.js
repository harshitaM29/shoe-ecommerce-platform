import classes from './Cart.module.css';
import { useContext,useState,useCallback,useEffect } from 'react';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem';
import TshirtContext from '../../store/tshirt-context';
const Cart = props => {


  const [items, setItems] = useState([]);
      const cartItemCtx = useContext(TshirtContext);

      const fetchData = useCallback(async() => {
      cartItemCtx.receivedItems.forEach((object) => {
        const index = items.findIndex(item => item.name === object.name);
      
        console.log(index);
        if (index === -1) {
           const updateCart = items.push({...object})
           setItems(updateCart)
        } else {
           items[index].large =Math.max(items[index].large);
           const updateCart = [...items]
          setItems(updateCart)
           
        }

      })
    },[])

    useEffect(() => {
      fetchData();
  },[fetchData])
      let totalAmount = 0;
      const hasCartItems = cartItemCtx.cartItems.length > 0;


    
    const cartItems = <ul className={classes['cart-items']}>{
     items.map((item) => 
     
      <CartItem key={item.id} name={item.name} amount={item.amount} quantity={item.quantity} price={item.price} large={item.large} 
      small={item.small} medium={item.medium} />
      
      )
      }</ul> 

      items.forEach(item => {
        totalAmount = totalAmount + Number(item.price)
        
    });
      
    return (
        <Modal onClose={props.onClose}>
               {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasCartItems && <button className={classes.button}>Order</button>}
        </div>
        </Modal>
         
        
    )
}

export default Cart;