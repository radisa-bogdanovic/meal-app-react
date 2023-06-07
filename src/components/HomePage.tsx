import React from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.heroContent}>
				<h1>Welcome to Our Website</h1>
				<p>Discover the amazing world of our products</p>
				<button className={classes.btn}>
					<Link to="/categories"> See Categories</Link>
				</button>
			</div>
		</section>
	);
};

export default HomePage;
