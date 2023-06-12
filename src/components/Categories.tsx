import classes from "./Categories.module.css";
import { SingleMealCategoryName } from "pages/models/models";
import MealCategory from "./MealCategory";
import { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { listOfCategories } from "../Store/mealsCategorySlice";
import { useEffect, useState } from "react";
import api from "../api/meals";

const Categories = () => {
	const dispatch = useDispatch();
	const [initialData, searchHandler] = useState([]);
	useEffect(() => {
		const response = async () => {
			try {
				const response = await api.get("/list.php?c=list");
				dispatch(listOfCategories(response.data.meals));
				searchHandler(response.data.meals);
			} catch (err) {
				console.log(err);
			}
		};
		response();
	}, []);

	const categoriesList = useSelector(
		(state: RootState) => state.meals.listOfCategories
	);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;

		dispatch(
			listOfCategories(
				initialData.filter((SingleCategory: SingleMealCategoryName) => {
					return SingleCategory.strCategory
						.toLowerCase()
						.includes(inputValue.toLowerCase().trim());
				})
			)
		);
	};

	return (
		<>
			<div className={classes["search-box"]}>
				<label htmlFor="seach" className={classes.title}>
					Search For Category
				</label>
				<input
					type="text"
					placeholder="Category Name"
					onChange={handleSearch}
					className={classes["search-input"]}
				/>
			</div>

			<div className={classes.wrapper}>
				{categoriesList.map((SingleCategory: SingleMealCategoryName) => {
					return (
						<MealCategory
							category={SingleCategory.strCategory}
							key={SingleCategory.strCategory}
						/>
					);
				})}
				{categoriesList.length === 0 && <p> No results !</p>}
			</div>
		</>
	);
};

export default Categories;
