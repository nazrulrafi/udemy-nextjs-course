import React from 'react';
import classes from "./loading.module.css";

function MealLoadingPage(props) {
    return (
        <p className={classes.loading}>Fetching Meals..........</p>
    );
}

export default MealLoadingPage;