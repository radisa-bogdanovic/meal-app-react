import React from "react";
import  classes  from "./NotFound.module.css";
const NotFound:React.FC= ()=> {
	return (
		<div className={classes.container}>
			<p>This route dont exist, please go to home page</p>
		</div>
	);
}

export default NotFound;
