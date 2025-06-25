import PortfolioWrapper from "@/components/portfolio/PortfolioWrapper";

import { projectImages } from "@/utils/projectImages";
import { Button, Typography } from "@mui/material";

function PortfolioPage() {
	return (
		<main className="mx-auto">
			{/* homebook next.js */}
			<section className="bg-gradient-to-b from-gray-200 to-zinc-300 mx-auto">
				<PortfolioWrapper
					projectName="Home Book"
					previewImages={projectImages.HomeBook}
					youtubeId="acVz44Te2uw">
					<div className="mx-auto ">
						<Typography variant="h3" sx={{ mb: 4 }}>
							Technical Stack
						</Typography>
						<ul>
							<li>
								• <strong>Next.js</strong> - Core framework for building
								interactive user interfaces, and SEO-friendly web app using
								React
							</li>
							<li>
								• <strong>Clerk</strong> - Seamless user authentication and user
								management
							</li>
							<li>
								• <strong>SupaBase</strong> - Scalable, open-source cloud
								database built on PostgreSQL
							</li>
							<li>
								• <strong>Prisma (with PostgreSQL)</strong> - Type-safe ORM for
								efficient data fetching, caching, and database synchronization
							</li>
							<li>
								• <strong>Tailwind CSS</strong> - Utility-first CSS framework
								for rapid UI styling and responsive design
							</li>
							<li>
								• <strong>Shadcn UI</strong> - Component library for consistent
								design and accessibility
							</li>
							<li>
								• <strong>Stripe</strong> - Secure payment gateway for handling
								order payments
							</li>
							<li>
								• <strong>Google Maps API</strong> - Integration of interactive
								maps for location-based features within the application
							</li>
						</ul>
						<article className="">
							<Typography variant="h3" sx={{ my: 4 }}>
								Description
							</Typography>
							<p className="mb-4">
								The web application is a full-stack portfolio and functional
								e-commerce-style platform that demonstrates advanced front-end
								and back-end integration. It is built using{" "}
								<strong>Next.js (App Router) </strong>
								to handle both UI rendering and server-side logic through{" "}
								<strong>Server Actions</strong> and <strong>API Routes</strong>,
								ensuring optimal performance via <strong>SSR</strong> and{" "}
								<strong>SSG</strong>.
							</p>
							<p className="mb-4">
								The API Routes also expose multiple endpoints for the{" "}
								<strong>native app</strong>, while reusing server-side business
								logic, streamlining development and improving productivity.
							</p>
							<p className="mb-4">
								The app implements <strong>role-based route protection</strong>.
								General users can place and cancel orders, view order history,
								add products to a favorites list, and leave product reviews.
								Vendors have all the permissions of general users, with
								additional access to create, update, delete, and view the total
								earnings of their products.
							</p>
							<p className="mb-4">
								<strong>Clerk</strong> is integrated to manage authentication,
								allowing users to sign in or register using email/password or
								third-party providers like Google. The application enforces
								route protection and session management based on user context.
							</p>
							<p className="mb-4">
								<strong>Supabase</strong> serves as a cloud-hosted PostgreSQL
								database, storing user data, orders, and location metadata in
								real-time. <strong>Prisma ORM</strong> is used for type-safe
								database operations, ensuring smooth interaction with relational
								data models.
							</p>
							<p className="mb-4">
								Styling is accomplished using <strong>Tailwind CSS</strong> for
								custom designs, while Shadcn UI components help maintain a
								consistent and accessible user experience.
							</p>
							<p>
								The <strong>Stripe</strong> integration enables secure payments,
								supporting checkout flows for digital products or services.
								Additionally, the <strong>Google Maps API</strong> is utilized
								to visually represent location-based data.
							</p>
						</article>
						<Typography variant="h3" sx={{ my: 4 }}>
							GitHub Repo
						</Typography>
						<div className="flex flex-col justify-center items-center md:flex-row  md:justify-between md:items-center gap-6">
							<Button
								variant="outlined"
								sx={{ textTransform: "capitalize", width: "100%" }}>
								<a
									href="https://github.com/jydxh/homebook"
									target="_blank"
									className="w-full">
									View the Repository
								</a>
							</Button>

							<Button
								variant={"contained"}
								sx={{ textTransform: "capitalize", width: "100%" }}>
								<a
									href="https://haochengportfolio.com/"
									target="_blank"
									className="w-full">
									View the Project
								</a>
							</Button>
						</div>
					</div>
				</PortfolioWrapper>
			</section>
			{/* homebook RN  */}
			<section className="bg-gradient-to-b from-zic-200 to-slate-300 mx-auto">
				<PortfolioWrapper
					disabledLink={true}
					projectName="Home Book (React Native Frontend)"
					previewImages={projectImages.RN}
					youtubeId="0KBtZfDIE_Q">
					<div className="mx-auto">
						<Typography variant="h3" sx={{ mb: 4 }}>
							Technical Stack
						</Typography>
						<ul>
							<li>
								• <strong>React Native</strong> - Core frameworks for building a
								cross-platform native app while using a single codebase
							</li>
							<li>
								• <strong>Expo</strong> - Speeds up the development environment
								set up and provides more convenient tools for development
							</li>
							<li>
								• <strong>Clerk</strong> - Handles frontend authentication and
								integrates seamlessly with the backend API route
							</li>
							<li>
								• <strong>Tanstack Query</strong> - Manages communication with
								the backend, data caching, and optimistic UI updates
							</li>
						</ul>
						<article>
							<Typography variant="h3" sx={{ my: 4 }}>
								Description
							</Typography>
							<p className="mb-4">
								The native app is built to extend the{" "}
								<a
									href="https://haochengportfolio.com/"
									target="_blank"
									className="underline">
									Home Book Next.js full-stack web application
								</a>{" "}
								by consuming its API Routes and reusing the same database and
								business logic. All user-facing functionalities available in the
								Next.js app have been fully migrated to this React Native
								application. This ensures a seamless cross-platform experience,
								allowing users to book products on the native app and later view
								their orders on the web app, and vice versa.
							</p>
							<p className="mb-4">
								<strong>Clerk</strong> handles authentication and integration
								with the backend to support both demo user login and standard
								login flow.
							</p>
							<p className="mb-4">
								<strong>Nativewind</strong> enables consistent UI styling and
								faster development.
							</p>
						</article>
						<Typography variant="h3" sx={{ my: 4 }}>
							GitHub Repo
						</Typography>
						<div className="flex flex-col justify-center items-center md:flex-row  md:justify-between md:items-center gap-6">
							<Button
								variant="contained"
								sx={{ textTransform: "capitalize", width: "50%" }}>
								<a
									href="https://github.com/jydxh/home_book_RN"
									target="_blank"
									className="w-full">
									View the Repository
								</a>
							</Button>
						</div>
					</div>
				</PortfolioWrapper>
			</section>

			{/* TMDB */}
			<section className="bg-gradient-to-b from-slate-300 to-gray-200 mx-auto">
				<PortfolioWrapper
					previewImages={projectImages.TMDB}
					projectName="The Movie Database"
					youtubeId="OAkHqqx23cA">
					<div className="mx-auto">
						<Typography variant="h3" sx={{ mb: 4 }}>
							Technical Stack
						</Typography>

						<ul className="mb-4">
							<li className="font-semibold text-lg mb-4">Frontend:</li>
							<li>
								• <strong>React</strong> - Core library for building interactive
								user interfaces
							</li>
							<li>
								• <strong>React Router</strong> - Client-side routing for
								seamless navigation
							</li>
							<li>
								• <strong>Stack Query</strong> - Data fetching, caching, and
								synchronization
							</li>
							<li>
								• <strong>Tailwind CSS</strong> - Utility-first CSS framework
								for rapid UI styling and responsive design
							</li>
							<li>
								• <strong>Material UI (MUI)</strong> - Component library for
								consistent design and accessibility
							</li>

							<li className="font-semibold text-lg my-4">Backend:</li>
							<li>
								• <strong>Node.js</strong> - A runtime environment for scalable
								server-side applications
							</li>
							<li>
								• <strong>Express.js</strong> - Minimal and flexible web
								application framework
							</li>
							<li>
								• <strong>MongoDB</strong> - NoSQL database for flexible,
								document-based data storage
							</li>
							<li>
								• <strong>Mongoose</strong> - ODM (Object Data Modeling) library
								for MongoDB and Node.js
							</li>
						</ul>
						<article className="">
							<Typography variant="h3" sx={{ my: 4 }}>
								Description
							</Typography>
							<p className="mb-4">
								This is a full-stack web app that integrates with the TMDB API
								to fetch data on the backend, securely forwarding the JSON to
								the frontend while keeping the API key hidden from the client.
							</p>
							<p className="mb-4">
								Includes user registration, login, and logout functionalities;
								JWT-based authentication with access and refresh tokens; email
								notifications; image uploads via Cloudinary; password reset;
								user profile updates, and account deletion.
							</p>
							<p className="mb-4">
								Protected routes using authentication middleware.
							</p>
							<p className="mb-4">
								Implemented user login/registration, profile update interface,
								input validation, and error handling.
							</p>
							<p className="mb-4">
								Added pagination and infinite scrolling for seamless content
								loading.
							</p>
						</article>
						<Typography variant="h3" sx={{ my: 4 }}>
							GitHub Repo
						</Typography>
						<div className="flex flex-col md:flex-row md:justify-start md:items-center gap-6 ">
							<Button
								variant="outlined"
								sx={{ textTransform: "capitalize", width: "100%" }}
								className="w-[50%]">
								<a
									href="https://github.com/jydxh/movie_hub_v2_full_stack"
									target="_blank"
									className="w-full">
									View the Repository
								</a>
							</Button>
							<Button
								variant={"contained"}
								sx={{ textTransform: "capitalize", width: "100%" }}>
								<a
									href="https://movie-hub-v1.onrender.com/"
									target="_blank"
									className="w-full">
									View the Project
								</a>
							</Button>
						</div>
					</div>
				</PortfolioWrapper>
			</section>

			{/* Sushi Star */}
			<section className="bg-gradient-to-b from-gray-200 to-zinc-300">
				<PortfolioWrapper
					previewImages={projectImages.TMDB}
					projectName="The Movie Database"
					youtubeId="_ZsUoMr7maU">
					<div className="mx-auto w-full">
						<Typography variant="h3" sx={{ mb: 4 }}>
							Technical Stack
						</Typography>
						<ul className="mb-4 flex flex-col justify-start">
							<li className="font-semibold">• HTML</li>
							<li className="font-semibold">• CSS</li>
							<li className="font-semibold">• JavaScript</li>
							<li className="font-semibold">• jQuery</li>
						</ul>
						<article>
							<Typography variant="h3" sx={{ my: 4 }}>
								Description
							</Typography>
							<p className="mb-4">
								This project is built using HTML, CSS, JavaScript, and jQuery.
								The home page dynamically fetches data from{" "}
								<strong>Google Firebase</strong>, ensuring real-time updates and
								responsiveness.
							</p>
							<p>
								The menu display and order total calculation are rendered
								dynamically using JavaScript, allowing for a smooth and
								interactive user experience.
							</p>
						</article>
						<Typography variant="h3" sx={{ my: 4 }}>
							GitHub Repo
						</Typography>
						<div className="flex flex-col md:flex-row md:justify-start md:items-center gap-6 ">
							<Button
								variant="outlined"
								sx={{ textTransform: "capitalize", width: "100%" }}
								className="w-[50%]">
								<a
									href="https://github.com/jydxh/sushistar"
									target="_blank"
									className="w-full">
									View the Repository
								</a>
							</Button>
							<Button
								variant={"contained"}
								sx={{ textTransform: "capitalize", width: "100%" }}>
								<a
									href="https://jydxh.github.io/sushistar/"
									target="_blank"
									className="w-full">
									View the Project
								</a>
							</Button>
						</div>
					</div>
				</PortfolioWrapper>
			</section>
		</main>
	);
}

export default PortfolioPage;
