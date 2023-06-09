import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
	MealsFromSingleCategory,
	SingleMealCategoryName,
} from "pages/models/models";

export interface MealsCategoryState {
	listOfMeals: MealsFromSingleCategory[];
	listOfCategories: SingleMealCategoryName[];
}
const initialState: MealsCategoryState = {
	listOfMeals: [],
	listOfCategories: [],
};

export const mealsSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {
		listOfCategoryMeals: (
			state: MealsCategoryState,
			action: PayloadAction<MealsFromSingleCategory[]>
		) => {
			state.listOfMeals = action.payload;
		},

		listOfCategories: (
			state: MealsCategoryState,
			action: PayloadAction<SingleMealCategoryName[]>
		) => {
			state.listOfCategories = action.payload;
		},
	},
});

export const { listOfCategoryMeals, listOfCategories } = mealsSlice.actions;

export default mealsSlice.reducer;
