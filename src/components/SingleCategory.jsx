import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import classes from "./SingleCategory.module.css";

function SingleCategory(props) {
	const routeParams = useParams();

	return (
		<>
			<h3 className={classes.title}>
				Meals for {routeParams.categories} category
			</h3>
			<div className={classes.container}>
				{props.category.map((meal) => {
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
			</div>
		</>
	);
}

export default SingleCategory;
