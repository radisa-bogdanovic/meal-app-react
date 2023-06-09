import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SingleCategory.module.css";

import {
	ListOfMealsFromSingleCategory,
	MealsFromSingleCategory,
} from "pages/models/models";
import type { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { listOfCategoryMeals } from "../Store/mealsCategorySlice";
import { useEffect } from "react";

const SingleCategory: React.FC<ListOfMealsFromSingleCategory> = (
	category: ListOfMealsFromSingleCategory
) => {
	const routeParams = useParams();
	const meals = useSelector((state: RootState) => state.meals.listOfMeals);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listOfCategoryMeals(category.meals));
	}, [dispatch, category.meals]);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		dispatch(
			listOfCategoryMeals(
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
			)
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
				{meals.map((meal: MealsFromSingleCategory) => {
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
				{meals.length === 0 && <p> No results !</p>}
			</div>
		</>
	);
};

export default SingleCategory;
