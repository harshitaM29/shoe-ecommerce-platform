import classes from './ProductItem.module.css';
import AddTshirtButton from './AddTshirtButton';

const ProductItem = (props) => {

console.log(props);

    return (
        <li  className={classes.shoe} key={props.id}>
            <div>
                
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.des}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
               <AddTshirtButton products={props} /> 
            </div>
        </li>
    )
}
export default ProductItem;