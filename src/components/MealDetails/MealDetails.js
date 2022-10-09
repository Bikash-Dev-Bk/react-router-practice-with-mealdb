import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetails = () => {
    const meal = useLoaderData().meals;
    return (
        <div>

            {
                meal.map(mel => 
                <div meal={meal}>
                    <h2>Details About: {mel.strMeal}</h2>
                    <p>Category: {mel.strCategory}</p>
                    <p><small>ID: {mel.idMeal}</small></p>
                    
                </div>)
            }
            
        </div>
    );
};

export default MealDetails;