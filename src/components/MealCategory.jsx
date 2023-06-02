import classes from "./MealCategory.module.css";
import { Link } from "react-router-dom";

function MealCategory(props) {
	const route = `/categories/${props.category}`;

	return (
		<div className={classes.wrapper}>
			<Link to={route}>{props.category}</Link>
		</div>
	);
}

export default MealCategory;
