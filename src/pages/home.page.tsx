import HeroImage from "@/components/home/HeroImage";
import AboutMe from "@/components/home/AboutMe";
import HomeCarousel from "@/components/home/HomeCarousel";
import HomeTechnicalStack from "@/components/home/HomeTechnicalStack";
import HomeContact from "@/components/home/HomeContact";

function HomePage() {
	return (
		<main className="mx-auto pb-4">
			{/* Hero Image with  brief introduction*/}

			<HeroImage />
			<AboutMe />
			<HomeCarousel />
			<HomeTechnicalStack />
			<HomeContact />
		</main>
	);
}

export default HomePage;
