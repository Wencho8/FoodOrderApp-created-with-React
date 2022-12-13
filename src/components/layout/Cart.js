import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {

  const ctx = useContext(CartContext)
  
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`; 


  const addHandler = (item) =>{
    ctx.addItem(item);
  }

  const removeHandler = (id) => {
    ctx.removeItem(id);
  }

  const cartItems = ( //del array solo mapeo los nombres
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
        <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={removeHandler.bind(null,item.id)} //envia el id del objeto
        onAdd={addHandler.bind(null,item)} //envia el objeto enter
        />
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