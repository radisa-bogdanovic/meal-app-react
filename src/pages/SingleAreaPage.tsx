import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import SingleCategory from "../components/SingleCategory";
import { MealsFromSingleCategory } from "./models/models";

function SingleAreaPage() {
	const category = useLoaderData() as MealsFromSingleCategory[];

	return <SingleCategory meals={category} />;
}

export default SingleAreaPage;

export async function loader({ params }: LoaderFunctionArgs) {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.area}`
	);

	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();
		return resData.meals;
	}
}
