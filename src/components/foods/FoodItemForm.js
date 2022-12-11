import classes from './FoodItemForm.module.css';
import { useRef } from 'react';

const FoodItemForm = (props) => {

  const amountInputRef = useRef();

  const submitHandler = event =>{
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount; //convierto string a numero

    props.onAddCart(enteredAmountNum);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input 
        ref={amountInputRef}
        id={'Amount'+props.id}
        type='number'
        min='1'
        max='3'
        step='1'
        defaultValue='1'
       />
     <button>+</button>
    </form>
  );
};

export default FoodItemForm;