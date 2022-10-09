import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meals from '../Meals/Meals';

const MealDB = () => {
    const meals = useLoaderData().meals;
    return (
        <div>
            <h2>Total Item: {meals.length}</h2>
            {
                meals.map(meal => <Meals
                key={meal.idMeal}
                meal={meal}
                ></Meals>)
            }
        </div>
    );
};

export default MealDB;