import { useLoaderData } from "react-router-dom";

import Areas from "../components/Areas";
import { SingleMealAreaName } from "./models/models";

function AreasPage() {
	const categories = useLoaderData() as SingleMealAreaName[];

	return <Areas areas={categories} />;
}

export default AreasPage;

export async function loader() {
	const response = await fetch(
		"https://www.themealdb.com/api/json/v1/1/list.php?a=list"
	);

	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();
		return resData.meals;
	}
}
