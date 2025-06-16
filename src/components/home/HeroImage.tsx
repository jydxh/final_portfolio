import { Typography } from "@mui/material";

function HeroImage() {
	return (
		<section
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
					backgroundPosition: "0 -550px",
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
				<Typography variant="h1" className="text-orange-500">
					Hi, I am Haocheng Qiu
				</Typography>
				<p className="mt-4 text-2xl">
					A full-stack web app and React Native mobile app developer
				</p>
			</div>
		</section>
	);
}

export default HeroImage;
