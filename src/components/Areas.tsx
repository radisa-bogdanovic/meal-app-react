import classes from "./Areas.module.css";
import { ModelForAreaProps, SingleMealAreaName } from "pages/models/models";
import AreaCategory from "./AreaCategory";
import { useState } from "react";

function Areas(areas: ModelForAreaProps) {
	const [listOfCategories, setArray] = useState(areas.areas);

	const handleSearch = (event: any) => {
		const inputValue = event.target.value;
		setArray(
			areas.areas.filter((SingleCategory: SingleMealAreaName) => {
				return SingleCategory.strArea
					.toLowerCase()
					.includes(inputValue.toLowerCase().trim());
			})
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
				{listOfCategories.map((SingleCategory: SingleMealAreaName) => {
					return (
						<AreaCategory
							category={SingleCategory.strArea}
							key={SingleCategory.strArea}
						/>
					);
				})}
			</div>
		</>
	);
}

export default Areas;
