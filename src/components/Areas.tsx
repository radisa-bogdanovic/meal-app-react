import classes from "./Areas.module.css";
import { ModelForAreaProps, SingleMealAreaName } from "pages/models/models";
import AreaCategory from "./AreaCategory";
import { RootState } from "../Store/Store";
import { useSelector, useDispatch } from "react-redux";
import { updateAreas } from "../Store/mealsAreaSlice";
import { useEffect } from "react";

function Areas(areas: ModelForAreaProps) {
	const areasList = useSelector((state: RootState) => state.areas.listOfAreas);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(updateAreas(areas.areas));
	}, [dispatch, areas.areas]);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		dispatch(
			updateAreas(
				areas.areas.filter((singleArea: SingleMealAreaName) => {
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
