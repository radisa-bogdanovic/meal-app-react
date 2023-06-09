import { configureStore } from "@reduxjs/toolkit";
import mealsCategorySlice from "./mealsCategorySlice";
import mealsAreaSlice from "./mealsAreaSlice";

export const store = configureStore({
	reducer: {
		meals: mealsCategorySlice,
		areas: mealsAreaSlice,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
