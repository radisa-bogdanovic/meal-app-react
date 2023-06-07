import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SingleArea.module.css";
import React, { useState } from "react";
import {
	ListOfMealsFromSingleCategory,
	MealsFromSingleCategory,
} from "pages/models/models";

const SingleArea: React.FC<ListOfMealsFromSingleCategory> = (
	category: ListOfMealsFromSingleCategory
) => {
	const [arrayOfMeals, setarrayOfMeals] = useState(category.meals);
	const routeParams = useParams();

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		setarrayOfMeals(
			category.meals.filter((SingleCategory: MealsFromSingleCategory) => {
				return (
					SingleCategory.strMeal
						.toLowerCase()
						.includes(inputValue.toLowerCase().trim()) ||
					SingleCategory.idMeal
						.toLowerCase()
						.includes(inputValue.toLowerCase().trim())
				);
			})
		);
	};
	return (
		<>
			<div className={classes["search-box"]}>
				<label htmlFor="seach" className={classes.title}>
					Meals for {routeParams.categories} category
				</label>
				<input
					type="text"
					placeholder="Enter Name or Id"
					onChange={handleSearch}
					className={classes["search-input"]}
				/>
			</div>

			<div className={classes.container}>
				{arrayOfMeals.map((meal: MealsFromSingleCategory) => {
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
};

export default SingleArea;
