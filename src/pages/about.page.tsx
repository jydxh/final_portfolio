import { Typography } from "@mui/material";
import React from "react";

function About() {
	return (
		<main className="mx-auto ">
			<section className="bg-gradient-to-b   from-slate-200 to-zinc-300">
				<article className="mx-auto grid place-items-center p-10 max-w-screen-md">
					<Typography variant="h2">Background</Typography>
					<p className="mt-4 ">
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
					<p className="mt-4">
						My 4-year{" "}
						<strong>
							bachelor's degree in Measurement and Control Technology and
							Instruments
						</strong>{" "}
						has cultivated my ability to learn independently and provided me
						with a well-rounded theoretical knowledge of computer science and
						information technology.
					</p>
					<p className="mt-4">
						With over a year of freelance development experience, I’ve gained
						practical experience in working on diverse projects, improving my
						technical skills and problem-solving abilities. Freelancing has
						allowed me to adapt to various client needs, handle project
						management, and apply my knowledge to real-world scenarios, all
						while continually learning and refining my craft.
					</p>
				</article>
			</section>
		</main>
	);
}

export default About;
