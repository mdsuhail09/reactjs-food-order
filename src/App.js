import {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown,setCartIsShown]= useState(false);
  
  function showCartHandler()
  {
    setCartIsShown(true);
  }

  function hideCartHandler()
  {
    setCartIsShown(fasle);
  }
  
  return (
    <CartProvider>
      <Cart/>
      {cartIsShown && <div> CART...</div>}
      <Header onShownCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
