import { Suspense } from 'react';  // ✅ Import Suspense
import Link from 'next/link';
import classes from "./page.module.css";
import MealGrid from "@/components/meal-grid";
import {getMeals} from "@/lib/meals";

async function Meals(){
    const meals = await getMeals();
    return <MealGrid meals={meals}/>
}

async function MealPage(){
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meal, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself.It is easy and hard</p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Meals..........</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}
export default MealPage;

