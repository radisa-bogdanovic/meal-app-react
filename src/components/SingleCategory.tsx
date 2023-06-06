import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import classes from "./SingleCategory.module.css";
import React from "react";
import { ListOfMealsFromSingleCategory } from "pages/models/models";

const SingleCategory: React.FC<ListOfMealsFromSingleCategory>= (category:ListOfMealsFromSingleCategory ) =>{
	const routeParams = useParams();


	return (
		<>
			<h3 className={classes.title}>
				Meals for {routeParams.categories} category
			</h3>
			<div className={classes.container}>
				{Object.entries(category).map(([key, subject], i) => {
					return (
						<div className={classes.wrapper} key={subject.idMeal}>
							<h3> Name : {subject.strMeal} </h3>
							<div className={classes.imgContainer}>
								<img src={subject.strMealThumb} alt="" />
							</div>
							<button>
								<Link to={`/meal/${subject.idMeal}`}> See more </Link>
							</button>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default SingleCategory;
