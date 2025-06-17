import {
	SiJquery,
	SiReact,
	SiVuedotjs,
	SiAngular,
	SiNodedotjs,
	SiExpress,
	SiNextdotjs,
	SiMysql,
	SiMongodb,
	SiFirebase,
	SiPrisma,
	SiPostgresql,
	SiPhp,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiOracle,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
export const technicalStacks = {
	language: [
		{ name: "HTML", icon: <SiHtml5 color="#e34c26" /> },
		{ name: "CSS", icon: <SiCss3 color="#1572B6" /> },
		{ name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
		{ name: "SQL", icon: <FaDatabase color="#00618a" /> },
		{ name: "PHP", icon: <SiPhp color="#777bb4" /> },
	],
	frontend: [
		{ name: "jQuery", icon: <SiJquery color="#0769ad" /> },
		{ name: "React", icon: <SiReact color="#61dafb" /> },
		{ name: "React Native", icon: <TbBrandReactNative color="#61dafb" /> },
		{ name: "Vue3", icon: <SiVuedotjs color="#42b883" /> },
		{ name: "Angular", icon: <SiAngular color="#dd0031" /> },
	],
	backend: [
		{ name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
		{ name: "Express.js", icon: <SiExpress color="#000" /> },
		{ name: "PHP", icon: <SiPhp color="#777bb4" /> },
	],
	fullstack: [{ name: "Next.js", icon: <SiNextdotjs color="#000" /> }],
	database: [
		{ name: "MySql", icon: <SiMysql color="#4479A1" /> },
		{ name: "mongoDB", icon: <SiMongodb color="#47A248" /> },
		{ name: "Oracle Sql", icon: <SiOracle color="#F80000" /> },
		{ name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
		{
			name: "Prisma ORM",
			icon: <SiPrisma color="#2D3748" />,
		},
		{ name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
	],
};
