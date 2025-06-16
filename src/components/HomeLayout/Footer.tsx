import { Button } from "@mui/material";
import { Link } from "react-router";
import { navLink } from "../../utils/navlink";

function Footer() {
	return (
		<footer className="py-8 grid place-content-center">
			<div className="flex flex-col gap-y-4">
				<Link to={"/"}>
					<img
						src="/public/haocheng_logo.png"
						alt="logo"
						className="w-[100px] h-[100px] hover:scale-110 duration-300 mx-auto"
					/>
				</Link>
				<div className="flex gap-x-4">
					{navLink.map(link => (
						<Button variant="text">
							<Link to={link.href} className="capitalize">
								{link.name}
							</Link>
						</Button>
					))}
				</div>

				<div className="flex flex-col justify-center items-center gap-y-4">
					<p>
						Design and Developed by <strong>Haocheng Qiu</strong>
					</p>
					<p>
						Github @{" "}
						<a
							href="https://github.com/jydxh"
							target="_blank"
							className="underline">
							jydxh
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
