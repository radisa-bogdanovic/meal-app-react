import styles from "./AboutUsPage.module.css";

const AboutUs = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to Picasso Restaurant</h1>
			<div className={styles.content}>
				<p>
					At Picasso Restaurant, we are passionate about serving delicious
					and authentic cuisine that satisfies your taste buds. Our menu is
					carefully crafted by our talented chefs, bringing together
					flavors from around the world.
				</p>
				<p>
					Located in the heart of the city, our restaurant provides a warm
					and inviting atmosphere for you to enjoy your dining experience.
					Whether you're looking for a romantic dinner for two, a family
					gathering, or a special celebration, we have the perfect setting
					for every occasion.
				</p>
				<p>
					Our team is dedicated to providing exceptional service and
					ensuring that every guest feels welcomed and valued. We strive to
					create memorable moments and leave a lasting impression on your
					palate.
				</p>
				<p>
					Join us at Picasso Restaurant and indulge in the art of fine
					dining. Experience the flavors, savor the ambiance, and create
					unforgettable memories with your loved ones.
				</p>
				<p>
					We source the freshest ingredients locally and internationally to
					ensure the highest quality in every dish we serve. Our culinary
					team combines traditional techniques with innovative approaches
					to bring you a unique dining experience that delights your
					senses.
				</p>
				<p>
					Sustainability is important to us. We strive to minimize our
					environmental impact by supporting local farmers, reducing waste,
					and implementing eco-friendly practices throughout our
					operations. By dining with us, you're not only enjoying
					exceptional food but also contributing to a more sustainable
					future.
				</p>
			</div>
		</div>
	);
};
export default AboutUs;
