import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import classes from "./FoodOptions.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Cheese Burger",
    description: "Meat and Cheese",
    price: 9.99,
  },
  {
    id: "m2",
    name: "Double Cheese Burger",
    description: "More Meat and Cheese",
    price: 13.99,
  },
];

const FoodOptions = () => {
  const mealsList = DUMMY_MEALS.map((food) => (
    <FoodItem
      key={food.id}
      name={food.name}
      description={food.description}
      price={food.price}
    />
  ));

  return (
   
    <section className={classes.meals}>
     <Card>
     <ul>{mealsList}</ul>
     </Card>
    </section>
  );
};

export default FoodOptions;
