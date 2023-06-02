import classes from "./MealCategory.module.css";
import { Link } from "react-router-dom";

function MealCategory(props) {
	const route = `/categories/${props.category}`;

	return (
		<div className={classes.wrapper}>
			<Link to={route}>
				<button> {props.category}</button>
			</Link>
		</div>
	);
}

export default MealCategory;
