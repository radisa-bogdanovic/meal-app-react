import classes from "./Categories.module.css";
import { ModelForProps, SingleMealCategoryName } from "pages/models/models";
import MealCategory from "./MealCategory";
import { useState } from "react";

function Categories(categories: ModelForProps) {
	const [listOfCategories, setArray] = useState(categories.category);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		setArray(
			categories.category.filter(
				(SingleCategory: SingleMealCategoryName) => {
					return SingleCategory.strCategory
						.toLowerCase()
						.includes(inputValue.toLowerCase().trim());
				}
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
				{listOfCategories.map((SingleCategory: SingleMealCategoryName) => {
					return (
						<MealCategory
							category={SingleCategory.strCategory}
							key={SingleCategory.strCategory}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Categories;
