import React, {  useState } from 'react';
import TshirtCartContextProvider from './store/TshirtCartContextProvider';
import './App.css';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Product from './components/TshirtProduct/Product';


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => {
    setIsOpen(true);
  }

  const closeCart = () => {
    setIsOpen(false);
  }
   return (
    <TshirtCartContextProvider>
      {isOpen && <Cart onClose={closeCart}/>}
    <Header onOpen={openCart}/>
    <main>
      <Product />
    </main>
    </TshirtCartContextProvider>
  );
}

export default App;
