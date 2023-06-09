import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
	SingleMealAreaName,
	MealsFromSingleCategory,
} from "pages/models/models";

export interface MealsAreaState {
	listOfMeals: MealsFromSingleCategory[];
	listOfAreas: SingleMealAreaName[];
}
const initialState: MealsAreaState = {
	listOfMeals: [],
	listOfAreas: [],
};

export const mealsSlice = createSlice({
	name: "meals",
	initialState,
	reducers: {
		listOfAreaMeals: (
			state: MealsAreaState,
			action: PayloadAction<MealsFromSingleCategory[]>
		) => {
			state.listOfMeals = action.payload;
		},

		updateAreas: (
			state: MealsAreaState,
			action: PayloadAction<SingleMealAreaName[]>
		) => {
			state.listOfAreas = action.payload;
		},
	},
});

export const { listOfAreaMeals, updateAreas } = mealsSlice.actions;

export default mealsSlice.reducer;
