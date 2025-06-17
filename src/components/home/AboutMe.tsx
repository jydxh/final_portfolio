import { Button, Typography } from "@mui/material";
import { Link } from "react-router";

function AboutMe() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto mt-2">
			{/* avatar image */}
			<img
				src="/haocheng_home_avatar.png"
				className="w-full h-[400px] object-cover"
			/>
			{/* about me content */}
			<div className="relative w-full h-[400px] grid place-content-center">
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage: 'url("/home_hero.jpg")',
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "blur(4px)",
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
				<div className="relative z-30 p-8 h-[300px] grid place-content-center">
					<div>
						<Typography variant="h2" sx={{ color: "white", marginBottom: 2 }}>
							About Me
						</Typography>
						<p className="mb-4 text-white">
							I am a freelance developer with 1+ years of experience of building
							full-stack web app using React, Next.js, and Express.js
						</p>
						<Button variant="contained" sx={{ textTransform: "capitalize" }}>
							<Link to={"/about"}> More Info</Link>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;
