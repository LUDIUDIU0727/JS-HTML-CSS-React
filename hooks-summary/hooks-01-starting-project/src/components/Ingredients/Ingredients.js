import React, { useState, useCallback } from 'react';
import IngredientList from './IngredientList';
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, []);


  const addIngredientHandler = (ingredient) => {
    setIsLoading(true);
    fetch('https://react-htttp-24e60-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }

    }).then(response => {
      setIsLoading(false);
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        { id: responseData.name, ...ingredient }

      ]);
    });

  };

  const removeIngredientHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(`https://react-htttp-24e60-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, {
      method: 'DELETE',
    }).then(response => {
      setIsLoading(false);
      setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))

    })
    setUserIngredients(prevIngredients => prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );


  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList ingredients={userIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
