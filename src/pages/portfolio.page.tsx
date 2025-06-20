import PortfolioWrapper from "@/components/portfolio/PortfolioWrapper";

import { projectImages } from "@/utils/projectImages";
import { Button, Typography } from "@mui/material";

function PortfolioPage() {
	return (
		<main className="mx-auto">
			{/* homebook next.js */}
			<section className="bg-gradient-to-b from-gray-200 to-zinc-300">
				<PortfolioWrapper
					projectName="Home Book"
					previewImages={projectImages.HomeBook}
					youtubeId="/acVz44Te2uw">
					<div>
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
						<article>
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
								logic, streamlining development and improving the productivity.
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
						<div className="flex justify-start items-center gap-10">
							<a
								href="https://github.com/jydxh/homebook"
								target="_blank"
								className="underline">
								https://github.com/jydxh/homebook
							</a>
							<Button
								variant={"contained"}
								sx={{ textTransform: "capitalize", width: "50%" }}>
								<a href="https://haochengportfolio.com/" target="_blank">
									View the Project
								</a>
							</Button>
						</div>
					</div>
				</PortfolioWrapper>
			</section>
			{/* todo: homebook RN  */}

			{/* TMDB */}
			<section className="bg-gradient-to-b from-slate-300 to-gray-200">
				<PortfolioWrapper
					previewImages={projectImages.TMDB}
					projectName="The Movie Database"
					youtubeId="OAkHqqx23cA">
					<div>
						<Typography variant="h3" sx={{ mb: 4 }}>
							Technical Stack
						</Typography>
						<p className="font-semibold text-lg mb-4">Frontend:</p>
						<ul className="mb-4">
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
						</ul>
						<p className="font-semibold text-lg mb-4">Backend:</p>
						<ul>
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
						<article>
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
						<div className="flex justify-start items-center gap-10">
							<a
								href="https://github.com/jydxh/movie_hub_v2_full_stack"
								target="_blank"
								className="underline">
								https://github.com/jydxh/movie_hub_v2_full_stack
							</a>
							<Button
								variant={"contained"}
								sx={{ textTransform: "capitalize", width: "50%" }}>
								<a href="https://movie-hub-v1.onrender.com/" target="_blank">
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
