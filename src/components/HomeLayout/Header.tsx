import { Button, Menu, MenuItem, IconButton, Icon } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, useLocation } from "react-router";
import { navLink } from "@/utils/navlink";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";

function Header() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const theme = useTheme();
	const location = useLocation();

	return (
		<div className=" bg-gray-50 max-w-screen-xl mx-auto py-4">
			<div className="mx-auto flex  justify-between items-center">
				{/* logo */}

				<Link to={"/"} className="flex gap-x-2 items-center">
					<img
						src="../../../public/haocheng_logo.png"
						className="w-[70px] h-[70px]"
					/>
					<p className="font-bold">Haocheng Qiu</p>
				</Link>

				{/* nav links */}
				<div className="sm:flex justify-items-center items-center gap-x-4 hidden">
					{navLink.map(link => {
						const isActive = location.pathname === link.href;
						return (
							<Button
								variant="text"
								size="medium"
								key={link.href}
								color={isActive ? "primary" : "inherit"}>
								<Link
									to={link.href}
									className="capitalize text-base font-semibold">
									{link.name}
								</Link>
							</Button>
						);
					})}
				</div>

				<div className="flex items-center gap-4">
					{/* nav links for small screen */}
					<div className="sm:hidden">
						<IconButton
							aria-controls={open ? "basic-menu" : undefined}
							aria-haspopup="true"
							aria-expanded={open ? "true" : undefined}
							onClick={handleClick}>
							<MenuIcon sx={{ width: 35, height: 35 }} />
						</IconButton>
						<Menu
							id="basic-menu"
							anchorEl={anchorEl}
							open={open}
							onClose={handleClose}
							slotProps={{
								list: {
									"aria-labelledby": "basic-button",
								},
							}}>
							{navLink.map(link => {
								const isActive = location.pathname === link.href;
								return (
									<MenuItem onClick={handleClose} key={link.href}>
										<Link
											style={{
												color: isActive
													? theme.palette.primary.main
													: "inherit",
											}}
											to={link.href}
											className="capitalize text-base font-semibold">
											{link.name}
										</Link>
									</MenuItem>
								);
							})}
						</Menu>
					</div>
					{/* github logo */}
					<a href="https://github.com/jydxh" target="_blank">
						<IconButton>
							<GitHubIcon
								sx={{ width: 40, height: 40 }}

								// className="text-gray-900"
							/>
						</IconButton>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
