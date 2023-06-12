import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SingleCategory.module.css";
import { useEffect, useState } from "react";
import { MealsFromSingleCategory } from "pages/models/models";

import type { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { listOfAreaMeals } from "../Store/mealsAreaSlice";
import api from "../api/meals";

const SingleArea: React.FC = () => {
	const routeParams = useParams();
	const meals = useSelector((state: RootState) => state.areas.listOfMeals);
	const dispatch = useDispatch();
	const [initialData, searchHandler] = useState([]);
	useEffect(() => {
		const response = async () => {
			try {
				const response = await api.get(`/filter.php?a=${routeParams.area}`);
				dispatch(listOfAreaMeals(response.data.meals));
				searchHandler(response.data.meals);
			} catch (err) {
				console.log(err);
			}
		};
		response();
	}, []);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		dispatch(
			listOfAreaMeals(
				initialData.filter((SingleCategory: MealsFromSingleCategory) => {
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
					Meals from {routeParams.area} area
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

export default SingleArea;
