import HeroImage from "@/components/home/HeroImage";
import AboutMe from "@/components/home/AboutMe";

function HomePage() {
	return (
		<main className="border   mx-auto pb-4">
			{/* Hero Image with  brief introduction*/}

			<HeroImage />
			<AboutMe />
		</main>
	);
}

export default HomePage;
