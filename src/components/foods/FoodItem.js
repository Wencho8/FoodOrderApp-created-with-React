import { useContext } from 'react';
import classes from './FoodItem.module.css';
import FoodItemForm from './FoodItemForm';
import CartContext from '../../store/cart-context';

const FoodItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;  //para que aparezca en forma de precio con $ y con 2 decimales
  const ctx = useContext(CartContext);   //añade valores al contexto

  const addToCartHandler = (amount) => {
    ctx.addItem({                     
        id: props.key,
        name: props.name,
        amount: amount,
        price: props.price
        
    })

  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <FoodItemForm id={props.key} onAddCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default FoodItem;