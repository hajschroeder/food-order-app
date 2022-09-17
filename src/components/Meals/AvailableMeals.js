import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Cigarette Butt Soup',
    description: 'The finest in foraged tobacco ends',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Crow Feather Salad',
    description: 'From my mother\'s recipe',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Plastic Bag Souflee',
    description: 'It is prettttttay good',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Construction scraps',
    description: 'A Healthy Starter',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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

export default AvailableMeals;