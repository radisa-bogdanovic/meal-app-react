import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SingleMeal(props) {
	const routeParams = useParams();

	useEffect(() => {
		fetchAllDetails();
	}, []);

	const [meal, setMealDetail] = useState({});

	const fetchAllDetails = () => {
		fetch(
			`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${routeParams.id}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setMealDetail(data.meals[0]);
			});
	};

	return (
		<div className="meal-wrapper">
			<h3> Meal Name : {meal.strMeal}</h3>
			<img src={meal.strMealThumb} alt="sdds" />

			<p> Category: {meal.category}</p>
			<p> Tags: {meal.strTags}</p>
			<p>Area :{meal.area}</p>

			<p>
				Drink altternate :
				{meal.strDrinkAlternate ? meal.strDrinkAlternate : "any"}
			</p>
			<p> YouTube link: </p>
			<p>
				<a href={meal.strYoutube} target="_blankl">
					Youtube Link
				</a>
			</p>

			<p>Description : {meal.strInstructions} </p>
		</div>
	);
}

export default SingleMeal;
