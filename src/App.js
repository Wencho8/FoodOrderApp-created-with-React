import {  useState } from 'react';

import Header from './components/layout/Header';
import FoodOptions from './components/foods/FoodOptions';
import Cart from './components/layout/Cart';
import CartProvider from './store/CartProvider';


function App() {

  const [cartIsVisible, setCartIsVisible] = useState(false);

  const cartHandlerOn = () => {
    setCartIsVisible(true);
  }

  const cartHandlerOff = () => {
    setCartIsVisible(false);
  }

  return (
    <CartProvider>
      {cartIsVisible && <Cart onCartOff={cartHandlerOff}/>}  {/* Si cartIsVisible true se muestra */}
      <Header onCartOn={cartHandlerOn}/>
      <main>
       <FoodOptions/>
      </main>
    </CartProvider>
  );
}

export default App;
