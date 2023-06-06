
import classes from "./Categories.module.css";
import {  SingleMealCategoryName } from "pages/models/models";
import MealCategory from "./MealCategory";

function Categories ( categories : SingleMealCategoryName[] ) {
	return (
		<>
			<h3 className={classes.title}>CATEGORIES</h3>
			<div className={classes.wrapper}>
				{Object.entries(categories).map(([key, subject], i)  => {
					return (
						<MealCategory
							category={subject.strCategory}
							key={subject.strCategory}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Categories;
