import { Swiper, SwiperSlide } from "swiper/react";
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import { previewImages } from "@/utils/previewImages";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router";
function HomeCarousel() {
	return (
		<section className="mx-auto w-full bg-gradient-to-b from-gray-100 to-gray-300 mt-2 p-4">
			<Box
				sx={{
					maxWidth: 1080,
					mx: "auto",
				}}>
				<Typography variant="h2" sx={{ textAlign: "center", marginBottom: 5 }}>
					Portfolios Preview
				</Typography>
				<Button
					sx={{
						textTransform: "capitalize",
						display: "block",
						mx: "auto",
						mb: 4,
					}}
					variant="contained">
					<Link to="/portfolio">View More</Link>
				</Button>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
					spaceBetween={50}
					slidesPerView={1}
					navigation
					autoplay={true}
					setWrapperSize
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}>
					{previewImages.map((src, i) => (
						<SwiperSlide key={i}>
							<a
								href={
									src.name.startsWith("TMDB")
										? "https://movie-hub-v1.onrender.com"
										: "https://haochengportfolio.com"
								}
								target="_blank">
								<img
									src={src.src}
									alt="portfolio preview"
									className="object-contain w-full max-h-[600px] mb-10"
								/>
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</section>
	);
}

export default HomeCarousel;
