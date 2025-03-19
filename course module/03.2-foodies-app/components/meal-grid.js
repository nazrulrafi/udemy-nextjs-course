import React from 'react';
import MealItem from "@/components/meal-item";
import classes from "./meal-grid.module.css"
function MealGrid({meals}) {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}

export default MealGrid;