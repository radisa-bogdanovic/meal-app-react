import { useLoaderData, LoaderFunctionArgs } from "react-router-dom";
import SingleCategory from "../components/SingleCategory";
import { MealsFromSingleCategory } from "./models/models";

function SingleCategoryPage() {
	const category = useLoaderData() as MealsFromSingleCategory[];

	return <SingleCategory meals={category} />;
}

export default SingleCategoryPage;

export async function loader({ params }: LoaderFunctionArgs) {
	const response = await fetch(
		`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categories}`
	);

	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();
		return resData.meals;
	}
}
