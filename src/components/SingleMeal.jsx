import { Link } from "react-router-dom";

import classes from "./SingleMeal.module.css";

function SingleMeal({ meal, randomItem }) {
	// const fetchRandomMeal = () => {
	// 	fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
	// 		.then((response) => {
	// 			return response.json();
	// 		})
	// 		.then((data) => {
	// 			navigate(`/meal/${data.meals[0].idMeal}`);
	// 			setMealDetail(data.meals[0]);
	// 		});
	// };
	return (
		<>
			<div className={classes["button-container"]}>
				<button>
					<Link to="/home"> Go Home</Link>
				</button>
				<button onClick={randomItem}> Random Meal</button>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.imageContainer}>
					<img src={meal.strMealThumb} alt="mealImage" />
				</div>

				<div className={classes["description-container"]}>
					<h3> Meal Name : {meal.strMeal}</h3>
					<p> Category: {meal.strCategory}</p>
					<p> Tags: {meal.strTags ? meal.strTags : "No avaliable tags"}</p>
					<p>Area :{meal.strArea}</p>
					<p>
						Drink altternate :
						{meal.strDrinkAlternate ? meal.strDrinkAlternate : "any"}
					</p>
					<p>
						<a href={meal.strYoutube} target="_blankl">
							Youtube Link
						</a>
					</p>
					<p>Description : {meal.strInstructions} </p>
				</div>
			</div>
		</>
	);
}

export default SingleMeal;
