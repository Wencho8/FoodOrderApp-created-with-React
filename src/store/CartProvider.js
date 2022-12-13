import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};
 //state tiene la lista, action tiene el nuevo item
const cartReducer = (state, action) => { //al agregar se retorna un state con los nuevos datos al agregar un item
  if (action.type === 'ADD') {
   
    
    const itemExists = state.items.findIndex(item => item.id === action.item.id);  //si no esta devuelve -1
    let updatedTotalAmount = 0;
    
    console.log(itemExists);
  
    let updatedItems;
    if (itemExists !== -1) { //existe
      state.items[itemExists].amount+=1; //al elmento le agrego el amount
      updatedItems = [...state.items] //nueva lista con todo lo anterior
      updatedTotalAmount = state.totalAmount + action.item.price;
    }
    else { //item nuevo al carrito
     updatedItems = state.items.concat(action.item);
     updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    }

    return { //retorna state nuevo
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === 'REMOVE') { 
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    let updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);//Si es 1 se remueve, se elimina el item.
    } else {
      
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

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