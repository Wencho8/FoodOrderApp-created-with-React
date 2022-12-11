
import classes from './CartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';


const CartButton = (props) => {

  const ctx = useContext(CartContext); //usa el contexto para el amount del boton

  const numberOfCartItems = ctx.items.reduce((curr, item) => {
    return curr+item.amount;  //retorna para cada elemento la cantidad de ese elemento en el carrito.
  }, 0 );

  return (
    <button className={classes.button} onClick={props.onClicking}>
      <span className={classes.icon}>
        <svg      /*Imagen vectorial para icono*/
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
        </svg>
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{ numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;