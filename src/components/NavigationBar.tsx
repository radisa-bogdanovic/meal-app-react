import React from "react";
import classes from "./NavigationBar.module.css";
import { Link } from "react-router-dom";

function NavigationBar() {
	return (
		<header className={classes.header}>
			<div className={classes.logo}>
				<Link to="/home"> Meals</Link>
			</div>
			<nav>
				<ul>
					<li>
						<Link to="/categories"> Categories</Link>
					</li>
					<li>
						<Link to="/areas"> Areas</Link>
					</li>

					<li>
						<Link to="/about"> About us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default NavigationBar;
