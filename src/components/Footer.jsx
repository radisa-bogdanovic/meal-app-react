import classes from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
	const currentDate = new Date().toDateString();
	return (
		<div className={classes.container}>
			<ul>
				<li>
					<Link to="/categories"> Categories</Link>
				</li>
				<li className={classes.listItems}> {currentDate}</li>
				<li>
					<Link to="/about"> About us</Link>
				</li>
			</ul>
		</div>
	);
}
export default Footer;
