import React from "react";

import NotFound from "./components/NotFound";

import NavigationBar from "./components/NavigationBar";

import Categories from "./components/Categories";

import { Routes, Route, Outlet } from "react-router-dom";
import SingleMeal from "./components/SingleMeal";
import SingleCategory from "./components/SingleCategory";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

const Layout = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
			<Footer />
		</>
	);
};

const AppRouter = () => (
	<Routes>
		<Route path="/" element={<Layout />}>
			<Route path="/home" element={<HomePage />} />

			<Route path="/categories" element={<Categories />} />
			<Route path="/categories/:categories" element={<SingleCategory />} />
			<Route path="/meal/:id" element={<SingleMeal />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	</Routes>
);

export default AppRouter;
