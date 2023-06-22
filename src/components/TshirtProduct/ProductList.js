import classes from './ProductList.module.css';
import ProductItem from './ProductItem';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import TshirtContext from '../../store/tshirt-context';
import { useContext } from 'react';
const DUMMY_SHOES = []

const ProductList = props => {
    const productList = useContext(TshirtContext);

    const tshirtList =  productList.products.map(shoe => <ProductItem key={shoe.id}
        id={shoe.id} 
        name={shoe.name} 
        des={shoe.des} 
        price={shoe.price} 
        large={shoe.large}
        medium={shoe.medium}
        small={shoe.small}
        quantity = {shoe.quantity} />)
     
    return (
        
    <section className={classes.list}>
        <Card>
    <ul>
       {tshirtList}
      
        </ul>
        </Card>
    </section>
    )
}

export default ProductList;