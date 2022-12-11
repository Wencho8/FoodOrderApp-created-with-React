import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {

  const ctx = useContext(CartContext)
  
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`; 

  const cartItems = ( //del array solo mapeo los nombres
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
    <div className={classes.backdrop} onClick={props.onCartOff}> {/* Fondo oscuro*/}
    </div>
    <div className={classes.modal}> {/* ventana modal*/}
      {cartItems} {/* Muestra los items del carrito */}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>  {/* botones de cerrar y de ordenar*/}
        <button className={classes['button--alt']} onClick={props.onCartOff}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
    </>
  );
};

export default Cart;