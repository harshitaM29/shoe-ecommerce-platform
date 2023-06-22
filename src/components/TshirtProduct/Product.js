import { Fragment } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const Product = props => {
    return (
    <Fragment>
        <ProductForm />
        <ProductList />
    </Fragment>
    )

}

export default Product;