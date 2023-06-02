import classes from "./NotFound.module.css";
function NotFound() {
	return (
		<div className={classes.container}>
			<p>This route dont exist, please go to home page</p>
		</div>
	);
}

export default NotFound;
