import { Routes, Route } from "react-router";
import HomePage from "./pages/home.page";
import About from "./pages/about.page";
import Contact from "./pages/contact.page";
import PortfolioPage from "./pages/portfolio.page";
import HomeLayout from "./pages/home_layout";

export default function App() {
	return (
		<Routes>
			<Route element={<HomeLayout />}>
				<Route index element={<HomePage />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="portfolio" element={<PortfolioPage />} />
			</Route>
		</Routes>
	);
}
