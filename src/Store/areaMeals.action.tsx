import { listOfAreaMeals, updateAreas } from "./mealsAreaSlice";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../Store/Store";
import { Action } from "@reduxjs/toolkit";

export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

export const loadListOfProductForArea = (params: string): AppThunk => {
	return async (dispatch) => {
		const fetchAreas = async () => {
			const response = await fetch(
				`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params}`
			);

			if (!response.ok) {
				throw new Error("Could not fetch areas data!");
			}

			const areas = await response.json();
			return areas;
		};

		try {
			const areasData = await fetchAreas();
			dispatch(listOfAreaMeals(areasData.meals));
		} catch (error) {
			console.log(error);
		}
	};
};

export const loadListOfAreas = (): AppThunk => {
	return async (dispatch) => {
		const fetchAreas = async () => {
			const response = await fetch(
				"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
			);

			if (!response.ok) {
				throw new Error("Could not fetch areas data!");
			}

			const areas = await response.json();
			return areas;
		};

		try {
			const areasData = await fetchAreas();
			dispatch(updateAreas(areasData.meals));
		} catch (error) {
			console.log(error);
		}
	};
};
