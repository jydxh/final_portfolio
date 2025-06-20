import { Button } from "@mui/material";

import { Link } from "react-router";

function NotFoundPage() {
	return (
		<div className="w-full h-[49vh] grid place-content-center ">
			<p className="text-red-500 text-bold font-bold text-5xl text-center">
				404
			</p>{" "}
			<p className="mt-10 text-lg font-semibold">
				{" "}
				Error! Cannot find the page!
			</p>
			<Button sx={{ mt: 5 }} variant="outlined" color="warning">
				<Link to={"/"}>Go Home</Link>
			</Button>
		</div>
	);
}

export default NotFoundPage;
