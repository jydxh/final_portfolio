import { Typography } from "@mui/material";

import { Outlet, useLocation } from "react-router";

function SubLayout() {
	const location = useLocation();
	const heading =
		location.pathname === "/about"
			? "About Me"
			: location.pathname === "/portfolio"
			? "My Portfolios"
			: "Contact Information";
	return (
		<>
			<div
				style={{
					position: "relative",
					width: "100%",
					height: "300px",
				}}>
				{/* Blurred background image */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage: 'url("/home_hero.jpg")',
						backgroundSize: "fit",
						backgroundPosition: "center",
						filter: "blur(0.1px)",
						zIndex: 1,
					}}
				/>
				<div
					style={{
						position: "absolute",
						inset: 0,
						background: "rgba(0,0,0,0.5)",
						zIndex: 2,
					}}
				/>
				{/* Content */}
				<div
					style={{
						position: "relative",
						zIndex: 3,
						color: "#fff",
					}}
					className="grid place-content-center h-[300px] px-4">
					<Typography variant="h1" className="text-white cursor-default">
						{heading}
					</Typography>
				</div>
			</div>
			<Outlet />
		</>
	);
}

export default SubLayout;
