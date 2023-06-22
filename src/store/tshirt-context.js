import React from "react";

const TshirtContext = React.createContext({
    products:[],
    cartItems: [],
    receivedItems:[],
    totalAmount: 0,
    addProduct: (proudct) => {},
    addLargeProductCart:(product) => {},
    removeProductCart:(id) => {},
    addProductToDb:(prd) => {},
    addCartToDb:(prd) =>{}
});

export default TshirtContext;