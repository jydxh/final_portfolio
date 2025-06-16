import { Outlet } from "react-router";
import Header from "../components/HomeLayout/Header";
import Footer from "../components/HomeLayout/Footer";

function HomeLayout() {
	return (
		<div className="mx-auto min-w-[320px] ">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default HomeLayout;
