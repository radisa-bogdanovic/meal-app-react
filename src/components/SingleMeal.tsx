import { Link, useParams, useNavigate } from "react-router-dom";
import classes from "./SingleMeal.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "Store/Store";
import { randomMeal, singleMeal } from "../Store/singleMealSlice";
import api from "../api/meals";

function SingleMeal() {
	const navigate = useNavigate();
	const routeParams = useParams();
	const mealState = useSelector(
		(state: RootState) => state.singleMeal.singleMeal
	);
	const dispatch = useDispatch();

	useEffect(() => {
		const response = async () => {
			try {
				const response = await api.get(`/lookup.php?i=${routeParams.id}`);
				dispatch(singleMeal(response.data.meals[0]));
			} catch (err) {
				console.log(err);
			}
		};
		response();
	}, []);

	const random = async () => {
		try {
			const response = await api.get(`/random.php`);
			dispatch(randomMeal(response.data.meals[0]));
			navigate(`/meal/${response.data.meals[0].idMeal}`);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className={classes["button-container"]}>
				<button>
					<Link to="/home"> Go Home</Link>
				</button>
				<button onClick={random}> Random Meal</button>
			</div>
			<div className={classes.wrapper}>
				<div className={classes.imageContainer}>
					<img src={mealState.strMealThumb} alt="mealImage" />
				</div>

				<div className={classes["description-container"]}>
					<h3> Meal Name : {mealState.strMeal}</h3>
					<p> Category: {mealState.strCategory}</p>
					<p>
						Tags:
						{mealState.strTags ? mealState.strTags : "No avaliable tags"}
					</p>
					<p>Area :{mealState.strArea}</p>
					<p>
						Drink altternate :
						{mealState.strDrinkAlternate
							? mealState.strDrinkAlternate
							: "any"}
					</p>
					<p>
						<a href={mealState.strYoutube} target="_blankl">
							Youtube Link
						</a>
					</p>
					<p>Description : {mealState.strInstructions} </p>
				</div>
			</div>
		</>
	);
}

export default SingleMeal;
