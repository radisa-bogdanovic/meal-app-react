import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./SingleCategory.module.css";

function SingleCategory() {
	const routeParams = useParams();

	useEffect(() => {
		fetchAllMealsForCategory();
	}, []);

	const [categories, setMealsForCategory] = useState([]);

	const fetchAllMealsForCategory = () => {
		fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?c=${routeParams.categories}`
		)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setMealsForCategory(data.meals);
			});
	};

	return (
		<>
			<h3 className={classes.title}>
				Meals for {routeParams.categories} category
			</h3>
			<div className={classes.container}>
				{categories.map((meal) => {
					return (
						<div className={classes.wrapper} key={meal.idMeal}>
							<h3> Name : {meal.strMeal} </h3>
							<div className={classes.imgContainer}>
								<img src={meal.strMealThumb} alt="" />
							</div>
							<button>
								<Link to={`/meal/${meal.idMeal}`}> See more </Link>
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default SingleCategory;
