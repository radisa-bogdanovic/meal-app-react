import { LoaderFunctionArgs,useLoaderData, useNavigate } from "react-router-dom";

import SingleMeal from "../components/SingleMeal";
import React from "react";
import { SingleMealModel } from "./models/models";


function SingleMealPage() {
	const meal = useLoaderData() as SingleMealModel;
	const navigate = useNavigate();

	async function functionRandom() {
		const response = await fetch(
			`https://www.themealdb.com/api/json/v1/1/random.php`
		);

		if (!response.ok) {
			// ...
		} else {
			const resData = await response.json();
			navigate(`/meal/${resData.meals[0].idMeal}`);
		}
	}
	return <SingleMeal {...meal}  randomItem={functionRandom} />;
}

export async function loader({ params }:LoaderFunctionArgs) {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
	);

	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();

		return resData.meals[0];
	}
}

export default SingleMealPage;
