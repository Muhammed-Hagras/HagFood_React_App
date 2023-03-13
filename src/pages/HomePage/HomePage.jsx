import React from 'react'
import "./HomePage.scss"
import {useMealContext} from "../../context/mealContext";
import CategoryList from '../../components/Category/CategoryList';
import Loader from '../../components/Loader/Loader';
import NotFound from "../../components/NotFound/NotFound"
import MealList from "../../components/Meal/MealList"

export default function HomePage() {
  const { categories, meals, categoryLoading, mealsLoading } = useMealContext();
  
  return (
    <main className='main-content'>
      
      { (mealsLoading) ? <Loader /> : (meals === null) ? <NotFound /> : (meals?.length) ? <MealList meals = {meals} /> : "" }
      {/* <MealList meals = {meals} />  */}
       {/* { (categoryLoading) ? <Loader /> : <CategoryList categories = {categories} /> }  */}

      <CategoryList categories={categories}/>


    </main>
  )
}
