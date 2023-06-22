import React from "react";

const TshirtContext = React.createContext({
    products:[],
    cartItems: [],
    totalAmount: 0,
    addProduct: (proudct) => {},
    addLargeProductCart:(product) => {},
    removeProductCart:(id) => {}
});

export default TshirtContext;