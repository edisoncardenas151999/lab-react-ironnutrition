import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(food);

  const handleAddNewFood = (newFood) => {
    const updatedFoods = [newFood, ...food];
    const updatedFoodsData = [newFood, ...foodData];

    setFood(updatedFoods);
    setFoodData(updatedFoodsData);
  };

  const handleRemoveFood = (FoodToRemove) => {
    let filteredFood = food.filter((people) => {
      return people !== FoodToRemove;
    });
    setFood(filteredFood);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <Search food={food} setFood={setFood} />
      <AddFoodForm onAddFood={handleAddNewFood} />
      <FoodBox onRemoveFood={handleRemoveFood} food={food} />
    </div>
  );
}

export default App;
