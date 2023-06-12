import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SingleMealModel } from "pages/models/models";

export interface SingleMealSlice {
	singleMeal: SingleMealModel;
}
const initialState: SingleMealSlice = {
	singleMeal: {} as SingleMealModel,
};

export const singleMealSlice = createSlice({
	name: "singleMeal",
	initialState,
	reducers: {
		singleMeal: (
			state: SingleMealSlice,
			action: PayloadAction<SingleMealModel>
		) => {
			state.singleMeal = action.payload;
		},

		randomMeal: (
			state: SingleMealSlice,
			action: PayloadAction<SingleMealModel>
		) => {
			state.singleMeal = action.payload;
		},
	},
});

export const { singleMeal, randomMeal } = singleMealSlice.actions;

export default singleMealSlice.reducer;
