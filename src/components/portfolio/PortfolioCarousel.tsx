import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
//import { previewImages } from "@/utils/previewImages";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";

export type PreviewImages = {
	src: string;
	name: string;
	alt: string;
}[];

function PortfolioCarousel({
	previewImages,
}: {
	previewImages: PreviewImages;
}) {
	return (
		<div className="mx-auto w-full mt-2 p-4">
			<Box
				sx={{
					maxWidth: 1080,
					mx: "auto",
				}}>
				<Typography variant="h3" sx={{ textAlign: "center", marginBottom: 5 }}>
					Project Preview
				</Typography>

				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					autoplay={{ delay: 5000 }}
					setWrapperSize
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}>
					{previewImages.map((image, i) => (
						<SwiperSlide key={i}>
							<a
								href={
									image.name.startsWith("TMDB")
										? "https://movie-hub-v1.onrender.com"
										: "https://haochengportfolio.com"
								}
								target="_blank">
								<img
									src={image.src}
									alt="portfolio preview"
									className="object-contain w-full max-h-[600px] mb-10"
								/>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</div>
	);
}

export default PortfolioCarousel;
