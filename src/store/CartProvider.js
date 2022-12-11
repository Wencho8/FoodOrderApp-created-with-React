import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => { //al agregar se retorna un state con los nuevos datos al agregar un item
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item); //action.item es uno de los parametros, ver abajo.
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState); //reducer retorna array de 2 elementos

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item}); //la accion tendra dos parametros.
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}   {/*Es como ponerlo en el APP.JS asi engloba a todos los que lo necesiten */}
    </CartContext.Provider>
  );
};

export default CartProvider;