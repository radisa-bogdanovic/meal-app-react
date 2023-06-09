import classes from "./Categories.module.css";
import { ModelForProps, SingleMealCategoryName } from "pages/models/models";
import MealCategory from "./MealCategory";
import { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { listOfCategories } from "../Store/mealsCategorySlice";
import { useEffect } from "react";

const Categories = (categories: ModelForProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(listOfCategories(categories.category));
	}, [dispatch, categories.category]);
	const categoriesList = useSelector(
		(state: RootState) => state.meals.listOfCategories
	);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;

		dispatch(
			listOfCategories(
				categories.category.filter(
					(SingleCategory: SingleMealCategoryName) => {
						return SingleCategory.strCategory
							.toLowerCase()
							.includes(inputValue.toLowerCase().trim());
					}
				)
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
