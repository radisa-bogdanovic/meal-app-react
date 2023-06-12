import "./App.css";

import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./components/NotFound";

import NavigationBar from "./components/NavigationBar";

import CategoryPage from "./pages/CategoriesPage";

import { Outlet } from "react-router-dom";

import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import SingleMealPage from "./pages/SingleMealPage";
import SingleCategoryPage from "./pages/SingleCategoryPage";
import AboutUs from "./pages/AboutUsPage";
import AreasPage from "./pages/AreasPage";
import SingleAreaPage from "./pages/SingleAreaPage";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

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
			},
			{
				path: "/categories/:categories",
				index: true,
				element: <SingleCategoryPage />,
			},
			{
				path: "/meal/:id",
				element: <SingleMealPage />,
			},
			{
				path: "/about",
				element: <AboutUs />,
			},

			{
				path: "*",
				element: <NotFound />,
			},
			{
				path: "/areas",
				element: <AreasPage />,
			},
			{
				path: "/areas/:area",
				index: true,
				element: <SingleAreaPage />,
			},
		],
	},
]);

function AppRouter() {
	return <RouterProvider router={routes} />;
}

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<AppRouter />
			</div>
		</Provider>
	);
}

export default App;
