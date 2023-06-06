import { Link } from "react-router-dom"
import classes from "./SingleMeal.module.css";
import {  SingleMealModel, } from "pages/models/models";




function SingleMeal(props: SingleMealModel) {
	return (
		<>
			<div className={classes["button-container"]}>
				<button>
					<Link to="/home"> Go Home</Link>
				</button>
				<button onClick={props.randomItem}> Random Meal</button>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.imageContainer}>
					<img src={props.strMealThumb} alt="mealImage" />
				</div>

				<div className={classes["description-container"]}>
					<h3> Meal Name : {props.strMeal}</h3>
					<p> Category: {props.strCategory}</p>
					<p> Tags: {props.strTags ? props.strTags : "No avaliable tags"}</p>
					<p>Area :{props.strArea}</p>
					<p>
						Drink altternate :
						{props.strDrinkAlternate ? props.strDrinkAlternate : "any"}
					</p>
					<p>
						<a href={props.strYoutube} target="_blankl">
							Youtube Link
						</a>
					</p>
					<p>Description : {props.strInstructions} </p>
				</div>
			</div>
		</>
	);
}

export default SingleMeal;
