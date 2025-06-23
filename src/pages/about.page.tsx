import { Button, Typography } from "@mui/material";
import laptop from "@/assets/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";
import { Link } from "react-router";
function About() {
	return (
		<main className="mx-auto ">
			{/* background section */}
			<section className="bg-gradient-to-b   from-slate-200 to-zinc-300">
				<article className="mx-auto grid place-items-center p-10 max-w-screen-md">
					<Typography variant="h2">Background</Typography>
					<p className="mt-4 leading-loose">
						I began learning front-end development in the fall of 2022 and
						quickly discovered how exciting it is to solve a wide range of
						technical challenges. This interest led me to enroll in the{" "}
						<a
							href="https://www.fanshawec.ca/programs/iwd2-web-development-and-internet-applications/next"
							target="_blank"
							className="font-bold underline">
							Web Development and Internet Applications
						</a>{" "}
						program at{" "}
						<a
							href="https://www.fanshawec.ca/"
							target="_blank"
							className="font-bold underline">
							Fanshawe College
						</a>{" "}
						in September 2023, while also continuing to self-learn a wide range
						of fundamental and practical web development skills.
					</p>
					<p className="mt-4 leading-loose">
						My 4-year{" "}
						<strong>
							bachelor's degree in Measurement and Control Technology and
							Instruments
						</strong>{" "}
						has cultivated my ability to learn independently and provided me
						with a well-rounded theoretical knowledge of computer science and
						information technology.
					</p>
					<p className="mt-4 leading-loose">
						With over a year of freelance development experience, I've gained
						practical experience in working on diverse projects, improving my
						technical skills and problem-solving abilities. Freelancing has
						enabled me to adapt to diverse client needs, manage projects
						effectively, and apply my knowledge to real-world scenarios, all
						while continually learning and refining my skills.
					</p>
				</article>
			</section>
			{/* technical stack section */}
			<section className="bg-gradient-to-b from-zinc-200 to-gray-200 p-10">
				<article className="mx-auto grid place-content-center max-w-screen-lg">
					<Typography variant="h2" sx={{ mx: "auto" }}>
						Technical Stack
					</Typography>
					<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-screen-lg  md:w-full">
						{/* language */}
						<div>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Language
							</Typography>
							<ul className="flex justify-start flex-col gap-y-2">
								<li>
									• Proficiency in <strong>HTML</strong>, <strong>CSS</strong>,{" "}
									<strong>JavaScript</strong>, <strong>TypeScript</strong>,{" "}
									<strong>Node.js</strong>, and <strong>SQL</strong>
								</li>
								<li>
									• Family with <strong>PHP</strong> for building and
									maintaining <strong>WordPress</strong> themes and plugins, as
									well as handling backend business logic
								</li>
							</ul>
						</div>
						{/* front end */}
						<div>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Frontend
							</Typography>
							<ul className="flex justify-start flex-col gap-y-2">
								<li>
									• Proficient in <strong>jQuery</strong>,{" "}
									<strong>React</strong> (including ecosystem libraries such as{" "}
									<strong>Redux</strong>, <strong>React Router</strong>,{" "}
									<strong>React Query</strong>), <strong>Tailwind CSS</strong>{" "}
									and <strong>MUI</strong>
								</li>
								<li>
									• Experienced with <strong>Vue</strong> and{" "}
									<strong>Element UI</strong> for building interactive front-end
									interfaces and single-page applications
								</li>
								<li>
									• Skilled in building cross-platform native apps using{" "}
									<strong>React Native </strong> and <strong>Expo</strong>,
									streamlining development for both iOS and Android platforms.
								</li>
							</ul>
						</div>
						{/* backend */}
						<div>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Backend
							</Typography>
							<ul className="flex justify-start flex-col gap-y-2">
								<li>
									• Proficient in <strong>Node.js</strong> and{" "}
									<strong>Express.js</strong>, with experience in designing and
									implementing RESTful APIs and middleware for web applications.
								</li>
								<li>
									• Familiar with both session-based and token-based
									authentication using cookies and JWTs
								</li>
								<li>
									• Implemented <strong>Clerk</strong> and{" "}
									<strong>Google</strong> authentication into backend APIs to
									ensure secure and seamless user authentication
								</li>
								<li>
									• Designed and implemented <strong>role-based API</strong>{" "}
									access to enforce user authorization and data protection
								</li>
							</ul>
						</div>
						{/* full-stack */}
						<div>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Full Stack
							</Typography>
							<ul className="flex justify-start flex-col gap-y-2">
								<li>
									• Proficient in <strong>Next.js</strong> for full-stack
									development, using the App route to implement SSR and SSG for
									optimized performance
								</li>
								<li>
									• Proficient in integrating RESTful APIs, handling data
									fetching, and managing API authentication and authorization
								</li>
								<li>
									• Familiar with database integration, including handling CRUD
									operations with SQL and NoSQL databases in Next.js
									applications
								</li>
								<li>
									• Experienced in designing the architecture for the full-stack
									Next.js project, ensuring scalability, performance, and
									maintainability across both front-end and back-end components
								</li>
								<li>
									• Familiar with deploying full-stack Next.js applications
									using <strong>Vercel</strong>, <strong>Docker</strong>,{" "}
									<strong>Supabase</strong>, and other cloud platforms, ensuring
									seamless CI/CD pipelines.
								</li>
							</ul>
						</div>
						{/* database */}
						<div>
							<Typography variant="h3" sx={{ mb: 2 }}>
								Database
							</Typography>
							<ul className="flex justify-start flex-col gap-y-2">
								<li>
									• Proficient in using <strong>SQL</strong> databases such as{" "}
									<strong>MySQL</strong> and <strong>Oracle SQL</strong> to
									perform data manipulation, querying
								</li>
								<li>
									• Experienced in working with NoSQL databases like{" "}
									<strong>Google Firebase</strong> and <strong>MongoDB</strong>{" "}
									to manage real-time data, authentication, and cloud-based
									storage solutions for dynamic and scalable applications
								</li>
								<li>
									• Skilled in working with <strong>Prisma ORM</strong> and{" "}
									<strong>PostgreSQL</strong> for efficient database management,
									including schema design, querying, and migrations
								</li>
								<li>
									• Familiar with database integration, including handling CRUD
									operations with SQL and NoSQL databases in Next.js
									applications
								</li>
								<li>
									• Proficient in managing complex queries, joins, and
									aggregations to meet business requirements
								</li>
							</ul>
						</div>
					</div>
				</article>
			</section>
			{/* future goals section*/}
			<section className="bg-gradient-to-b from-gray-100 to-zinc-300 p-10">
				<div className="mx-auto max-w-screen-lg">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						{/* image */}

						<img className="object-contain w-full" alt="laptop" src={laptop} />

						{/* futural goals */}
						<div className="grid place-content-center">
							<Typography variant="h2" sx={{ mb: 10, textAlign: "center" }}>
								Future Goals
							</Typography>
							<p className="font-medium text-lg ">
								I'm committed to mastering Java and Spring backend frameworks to
								build scalable and efficient backend systems.
							</p>
							<div className="flex justify-center items-center mt-10 gap-x-4">
								<Button
									variant="contained"
									sx={{ textTransform: "capitalize" }}>
									<Link to={"/contact"}>Contact Me</Link>
								</Button>
								<Button variant="outlined" sx={{ textTransform: "capitalize" }}>
									<Link to={"/portfolio"}>My Portfolio</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
