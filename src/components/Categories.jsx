import classes from "./Categories.module.css";

import MealCategory from "./MealCategory";

function Categories({ categories }) {
	return (
		<>
			<h3 className={classes.title}>CATEGORIES</h3>
			<div className={classes.wrapper}>
				{categories.map((meals) => {
					return (
						<MealCategory
							category={meals.strCategory}
							key={meals.strCategory}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Categories;
