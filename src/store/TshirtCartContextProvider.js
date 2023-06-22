import TshirtContext from "./tshirt-context";
import { useState,useEffect,useCallback } from "react";

const TshirtCartContextProvider = props => {
    const [cartItems, setCartItems] = useState([]);
    const [product, setProdcuts] = useState([]);
    const [items, setItems] = useState([]);
    const addProductHandler = (product) => {
        setProdcuts(preProduct => {
            return [product,...preProduct];
        });
    

   
    }

    const addLargeProductCartHandler = (prd) => {
        const index = cartItems.findIndex(ct => ct.id === prd.id);
        const prdIndex = product.findIndex(ct => ct.id === prd.id)
         product[prdIndex].large -= 1;
        if(index === -1) {
            const updateCart = cartItems.push({
                ...prd,
              
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

    }
    const addSmallProductCartHandler = (prd) => {
        const index = cartItems.findIndex(ct => ct.id === prd.id);
        const prdIndex = product.findIndex(ct => ct.id === prd.id)
         product[prdIndex].small -= 1;
        if(index === -1) {
            const updateCart = cartItems.push({
                ...prd,
              
              });
              setCartItems(updateCart)
            }
              else{
              
                cartItems[index].small += 1;
                cartItems[index].quantity +=1;
                setCartItems([...cartItems]);
              }
              
       
            // setCartItems(updateCart);
        setCartItems([...cartItems])

    }
    const addMediumProductCartHandler = (prd) => {
        const index = cartItems.findIndex(ct => ct.id === prd.id);
        const prdIndex = product.findIndex(ct => ct.id === prd.id)
         product[prdIndex].medium -= 1;
        if(index === -1) {
            const updateCart = cartItems.push({
                ...prd,
              
              });
              setCartItems(updateCart)
            }
              else{
              
                cartItems[index].medium += 1;
                cartItems[index].quantity +=1;
                setCartItems([...cartItems]);
              }
              
       
            // setCartItems(updateCart);
        setCartItems([...cartItems])

    }

    const addToDBProduct = () => {
        fetch(`https://crudcrud.com/api/9f32337a0f9a4dbdbdbc7446f413f0dc/product`, {
            method:'POST',
            body: JSON.stringify({
                ...product
            }),
            headers: {
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
    }

    const addCartToDB = ()=> {
      fetch(`https://crudcrud.com/api/9f32337a0f9a4dbdbdbc7446f413f0dc/cart`, {
        method:'POST',
        body: JSON.stringify({
            ...cartItems
        }),
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    })

    }
    const receivedItems = useCallback(() => {
      fetch(`https://crudcrud.com/api/9f32337a0f9a4dbdbdbc7446f413f0dc/cart`)
      .then(res=> res.json())
      .then(data => 
       setItems(data))
    
     
   },[])
   useEffect(() => {
       receivedItems();
   },[receivedItems])
    const cartContext = {
        products: product,
        cartItems:cartItems,
        receivedItems:items,
        totalAmount: 0,
        addProductToDb:addToDBProduct,
        addProduct: addProductHandler,
        addCartToDb:addCartToDB,
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