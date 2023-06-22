import TshirtContext from "./tshirt-context";
import { useState } from "react";

const TshirtCartContextProvider = props => {
    const [cartItems, setCartItems] = useState([]);
    const [product, setProdcuts] = useState([]);
    const addProductHandler = (product) => {
        setProdcuts(preProduct => {
            return [product,...preProduct];
        })
      
    }

    console.log(product)
    const addLargeProductCartHandler = (prd) => {
        const index = cartItems.findIndex(ct => ct.id === prd.id);
        const prdIndex = product.findIndex(ct => ct.id === prd.id)
        product[prdIndex].large -= 1;
        if(index === -1) {
            const updateCart = cartItems.push({
                ...prd,
                large:1
              });
              setCartItems(updateCart)
            }
              else{
              
                cartItems[index].large += 1;
                cartItems[index].quantity +=1;
                setCartItems([...cartItems]);
              }
              
       
            // setCartItems(updateCart);
        setCartItems([...cartItems])
        console.log(cartItems)
    }
    const cartContext = {
        products: product,
        cartItems:cartItems,
        totalAmount: 0,
        addProduct: addProductHandler,
        addLargeProductCart:addLargeProductCartHandler,
        removeProductCart:(id) => {}
    }
    return (
        <TshirtContext.Provider value={cartContext}>
            {props.children}
        </TshirtContext.Provider>
    )
}

export default TshirtCartContextProvider;