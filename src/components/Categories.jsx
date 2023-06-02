import classes from "./Categories.module.css";
import { useState, useEffect } from "react";
import MealCategory from "./MealCategory";

function Categories() {
	useEffect(() => {
		fetchUserData();
	}, []);

	const [users, setUsers] = useState([]);

	const fetchUserData = () => {
		fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data.meals);
			});
	};

	return (
		<>
			<h3 className={classes.title}>CATEGORIES</h3>
			<div className={classes.wrapper}>
				{users.map((category) => {
					return (
						<MealCategory
							category={category.strCategory}
							key={category.strCategory}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Categories;
