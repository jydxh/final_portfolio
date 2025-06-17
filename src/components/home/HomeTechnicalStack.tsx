import { Typography } from "@mui/material";
import { technicalStacks } from "@/utils/techicalStacks";

const Card = ({
	title,
}: {
	title: "language" | "frontend" | "backend" | "fullstack" | "database";
}) => {
	return (
		<div>
			<p className="font-semibold italic text-lg">{title}</p>
			<ul>
				{technicalStacks[title].map(item => (
					<li key={item.name} className="flex items-center justify-start gap-2">
						{item.icon} {item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

function HomeTechnicalStack() {
	return (
		<section className="bg-gradient-to-r from-slate-100 to-gray-200 p-10 mx-auto">
			<div className="max-w-screen-md mx-auto">
				<Typography variant="h2" sx={{ mx: "auto", textAlign: "center" }}>
					Technical Stack
				</Typography>
				<div className="grid grid-cols-2 md:grid-cols-5 mt-4">
					<Card title="language" />
					<Card title="frontend" />
					<Card title="backend" />
					<Card title="fullstack" />
					<Card title="database" />
				</div>
			</div>
		</section>
	);
}

export default HomeTechnicalStack;
