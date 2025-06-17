import HeroImage from "@/components/home/HeroImage";
import AboutMe from "@/components/home/AboutMe";
import HomeCarousel from "@/components/home/HomeCarousel";

function HomePage() {
	return (
		<main className="border   mx-auto pb-4">
			{/* Hero Image with  brief introduction*/}

			<HeroImage />
			<AboutMe />
			<HomeCarousel />
		</main>
	);
}

export default HomePage;
