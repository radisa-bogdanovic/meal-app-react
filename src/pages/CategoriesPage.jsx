import { useLoaderData } from "react-router-dom";

import Categories from "../components/Categories";

function CategoryPage() {
	const categories = useLoaderData();

	return <Categories categories={categories} />;
}

export default CategoryPage;

export async function loader() {
	const response = await fetch(
		"https://www.themealdb.com/api/json/v1/1/list.php?c=list"
	);

	if (!response.ok) {
		// ...
	} else {
		const resData = await response.json();
		return resData.meals;
	}
}
