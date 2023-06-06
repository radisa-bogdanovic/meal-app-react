import "./App.css";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

import NavigationBar from "./components/NavigationBar";

import CategoryPage, {
	loader as categoriesLoader,
} from "./pages/CategoriesPage";

import { Outlet } from "react-router-dom";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import SingleMealPage, {
	loader as singleMealLoader,
} from "./pages/SingleMealPage";
import SingleCategoryPage, {
	loader as singleCategoryLoader,
} from "./pages/SingleCategoryPage";
import AboutUs from "./pages/AboutUsPage";

const Layout = () => {
	return (
		<>
			<NavigationBar />
			<Outlet />
			<Footer />
		</>
	);
};

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, path: "home", element: <HomePage /> },
			{
				path: "/categories",
				element: <CategoryPage />,
				loader: categoriesLoader,
			},
			{
				path: "/categories/:categories",
				index: true,
				element: <SingleCategoryPage />,
				loader: singleCategoryLoader,
			},
			{
				path: "/meal/:id",
				element: <SingleMealPage />,
				loader: singleMealLoader,
			},
			{
				path: "/about",
				element: <AboutUs />,
			},

			{
				path: "*",
				element: <NotFound />,
			},
		],
	},
]);

function AppRouter() {
	return <RouterProvider router={routes} />;
}

function App() {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

export default App;
