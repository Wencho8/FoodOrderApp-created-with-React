import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import classes from "./FoodOptions.module.css";
import FoodFilter from "./FoodFilter";
import React, { useState } from 'react';

const DUMMY_MEALS = [  //lista original
  {
    id: "m1",
    name: "Cheese Burger",
    description: "Meat and Cheese",
    price: 9.99,
    type: "Burger"
  },
  {
    id: "m2",
    name: "Double Cheese Burger",
    description: "More Meat and Cheese",
    price: 13.99,
    type: "Burger"
  },
  {
    id: "m3",
    name: "Extra Cheese Burger",
    description: "Extra of all",
    price: 18.99,
    type: "Burger"
  },
  {
    id: "m4",
    name: "Water",
    description: "Fresh",
    price: 1.99,
    type: "Drink"
  },
  {
    id: "m5",
    name: "Coke",
    description: "Fresh",
    price: 1.99,
    type: "Drink"
  },
  
];

const FoodOptions = () => {

  
  const [filter, setFilter] = useState("Burger");

  const filterHandler = (value) => {
     setFilter(value);
  }

  
   let filterMealsList = DUMMY_MEALS.filter((food) => { //se filtra la lista para mostrar. //es let, asi se puede cambiar abajo cuando mapea los items.
    return food.type === filter;
  });


  filterMealsList  = filterMealsList.map((food) => ( //se pasan props a FoodItem
    <FoodItem      //mapea el array mostrandolo como un food item con los valores que le pasa como prop
      id={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
      type={food.type}
    />
  ));

  

  return (
   
  <section className={classes.meals}>
    <div style={{margin: '10px'}}>
      <FoodFilter onChangeFilter={filterHandler}/>
    </div>
    <Card>
     <ul>{filterMealsList}</ul>
    </Card>
  </section>
  );
};

export default FoodOptions;
