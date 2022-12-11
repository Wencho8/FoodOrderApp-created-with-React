import { Fragment } from 'react';


import mealsImage from '../../assets/food.jpg';
import CartButton from './CartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FoodOrderApp</h1>
        <CartButton  onClicking={props.onCartOn}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="food" />
      </div>
    </Fragment>
  );
};

export default Header;