import classes from './AddButton.module.css';
import TshirtContext from '../../store/tshirt-context';
import { useContext } from 'react';

const AddTshirtButton = props => {

    console.log("tshirtbutton",props)
    const cartCtx = useContext(TshirtContext)
    const addCartLargeItem = (e) => {
        e.preventDefault();
        let q = 0, l=0;
        q += 1;
        const cartData = {
            id:props.products.id,
            name:props.products.name,
            price:props.products.price,
          
        }
        cartCtx.addLargeProductCart({...cartData,large:1,small:0,medium:0,quantity:q})
        cartCtx.addCartToDb()
    }
    
    return (
    <div className={classes.action} >
        <button onClick={addCartLargeItem}>Buy Large({props.products.large})</button>
        <button >Buy Medium({props.products.medium})</button>
        <button >Buy Small({props.products.small})</button>
    </div>
    )


};

export default AddTshirtButton;