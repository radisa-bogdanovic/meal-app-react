import { configureStore } from "@reduxjs/toolkit";
import mealsCategorySlice from "./mealsCategorySlice";
import mealsAreaSlice from "./mealsAreaSlice";
import singleMealSlice from "./singleMealSlice";

export const store = configureStore({
	reducer: {
		meals: mealsCategorySlice,
		areas: mealsAreaSlice,
		singleMeal: singleMealSlice,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
