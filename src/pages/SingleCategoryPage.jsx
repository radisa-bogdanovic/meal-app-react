import { useLoaderData } from "react-router-dom";

import SingleCategory from "../components/SingleCategory";

function SingleCategoryPage() {
	const category = useLoaderData();

	return <SingleCategory category={category} />;
}

export default SingleCategoryPage;

export async function loader({ params }) {
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
