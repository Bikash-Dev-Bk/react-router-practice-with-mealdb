import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meals.css'

const Meals = ({meal}) => {
    const {strMeal, strCategory, strArea, idMeal} = meal;

    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='meals'>
            <h4>Name: {strMeal}</h4>
            <p>Category: {strCategory}</p>
            <p>Area: {strArea}</p>
            <p><small>ID: {idMeal}</small></p>
            <button onClick={navigateHandler}>Show Details</button>
        </div>
    );
};

export default Meals;