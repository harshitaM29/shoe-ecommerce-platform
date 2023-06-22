import classes from './AddButton.module.css';
import TshirtContext from '../../store/tshirt-context';
import { useContext } from 'react';

const AddTshirtButton = props => {

    const cartCtx = useContext(TshirtContext)
    const addCartLargeItem = (e) => {
        e.preventDefault();
        let q = 0, l=0;
        q += 1;
        cartCtx.addLargeProductCart({...props.products,quantity:q})
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