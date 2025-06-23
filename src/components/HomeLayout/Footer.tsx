import { Button } from "@mui/material";
import { Link, useLocation } from "react-router";
import { navLink } from "../../utils/navlink";
import logo from "../../../public/haocheng_logo.png";
function Footer() {
	const location = useLocation();
	return (
		<footer className="py-8 grid place-content-center  bg-linear-to-b from-gray-100  to-slate-200">
			<div className="flex flex-col gap-y-4">
				<Link to={"/"}>
					<img
						src={logo}
						alt="logo"
						className="w-[100px] h-[100px] hover:scale-110 duration-300 mx-auto"
					/>
				</Link>
				<div className="flex gap-x-4">
					{navLink.map(link => {
						const isActive = location.pathname === link.href;
						return (
							<Button
								variant="text"
								key={link.href}
								color={isActive ? "primary" : "inherit"}>
								<Link to={link.href} className="capitalize">
									{link.name}
								</Link>
							</Button>
						);
					})}
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
