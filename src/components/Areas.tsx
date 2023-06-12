import classes from "./Areas.module.css";
import { SingleMealAreaName } from "pages/models/models";
import AreaCategory from "./AreaCategory";
import { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { updateAreas } from "../Store/mealsAreaSlice";
import { useEffect, useState } from "react";
import api from "../api/meals";

function Areas() {
	const areasList = useSelector((state: RootState) => state.areas.listOfAreas);
	const dispatch = useDispatch();
	const [initialData, searchHandler] = useState([]);

	useEffect(() => {
		const response = async () => {
			try {
				const response = await api.get("/list.php?a=list");
				dispatch(updateAreas(response.data.meals));
				searchHandler(response.data.meals);
			} catch (err) {
				console.log(err);
			}
		};
		response();
	}, []);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		dispatch(
			updateAreas(
				initialData.filter((singleArea: SingleMealAreaName) => {
					return singleArea.strArea
						.toLowerCase()
						.includes(inputValue.toLowerCase().trim());
				})
			)
		);
	};
	return (
		<>
			<div className={classes["search-box"]}>
				<label htmlFor="seach" className={classes.title}>
					Search For Area
				</label>
				<input
					type="text"
					placeholder="Category Name"
					onChange={handleSearch}
					className={classes["search-input"]}
				/>
			</div>

			<div className={classes.wrapper}>
				{areasList.map((SingleCategory: SingleMealAreaName) => {
					return (
						<AreaCategory
							category={SingleCategory.strArea}
							key={SingleCategory.strArea}
						/>
					);
				})}
				{areasList.length === 0 && <p> No results !</p>}
			</div>
		</>
	);
}

export default Areas;
