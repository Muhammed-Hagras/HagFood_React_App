import { createContext, useContext, useEffect, useReducer } from "react"
import { startFetchCategories } from "../actions/mealActions";
import { mealReducer } from "../reducres/mealReducer";


const initialState = {
    categories: [],
    categoryLoading: false,
    categoryError: false,
    categorMeals: [],
    categoryMealsLoading: false,
    categorMealsError: false,
    meals: [],
    mealsLoading: false,
    mealsError: false,
    meal: [],
    mealLoading: false,
    mealError: false
}

const MealContext = createContext({});

export const MealProvider = ({children}) => {
    const [state, dispatch] = useReducer(mealReducer, initialState);

    useEffect(() => {
        startFetchCategories(dispatch);
    }, [])
    
    return (
        <MealContext.Provider value={{
            ...state,
            dispatch, 
            startFetchCategories
        }}>
            {children}
        </MealContext.Provider>
    )
}

export const useMealContext  = () => {
    return useContext(MealContext)
}