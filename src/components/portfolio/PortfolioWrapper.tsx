import { Divider, Typography } from "@mui/material";

import VideoCard from "./VideoCard";
import PortfolioCarousel, { type PreviewImages } from "./PortfolioCarousel";
import { ReactNode } from "react";

function PortfolioWrapper({
	children,
	previewImages,
	youtubeId,
	projectName,
	disabledLink = false,
}: {
	disabledLink?: boolean;
	children: ReactNode;
	previewImages: PreviewImages;
	youtubeId: string;
	projectName: string;
}) {
	return (
		<div className="max-w-screen-2xl p-10 mx-auto">
			<Typography variant="h2" sx={{ textAlign: "center" }}>
				Project Name: {projectName}
			</Typography>
			<div className="grid grid-cols-1  mt-10 gap-10">
				{/* carousel */}
				<div>
					<PortfolioCarousel
						previewImages={previewImages}
						disabledLink={disabledLink}
					/>
				</div>
				{/* project description */}
				<div className="max-w-screen-lg mx-auto w-full">{children}</div>

				{/* demo video */}
				<div className="flex justify-center items-center">
					<VideoCard title="Home Book" youtubeId={youtubeId} />
				</div>
			</div>
			<Divider sx={{ mt: 6 }} />
		</div>
	);
}

export default PortfolioWrapper;
