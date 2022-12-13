import React from 'react';

import classes from './FoodFilter.module.css';

const FoodFilter = (props) => {

const changeHandler = (event) =>{
    props.onChangeFilter(event.target.value);
};

  return (
    <div className={classes.foodFilter }>
      <div className={classes.FoodFilterControl}>
        <select value={props.selected} onChange={changeHandler}>
          <option value='Burger'>Burger</option>
          <option value='Drink'>Drink</option>
        </select>
      </div>
    </div>
  );
};

export default FoodFilter;