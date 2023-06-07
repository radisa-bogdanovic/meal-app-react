import React from "react";
import classes from "./MealCategory.module.css";
import { Link } from "react-router-dom";
import { MealCategoryModel } from "pages/models/models";

function AreaCategory(props: MealCategoryModel) {
	const route = `/areas/${props.category}`;

	return (
		<div className={classes.wrapper}>
			<Link to={route}>
				<button> {props.category}</button>
			</Link>
		</div>
	);
}

export default AreaCategory;
