import { Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function HomeContact() {
	const rows = [
		{ title: "Email Address", value: "wzxxds@gmail.com" },
		{ title: "Phone number", value: "+1 226-978-6087" },
		{ title: "Github", value: "https://github.com/jydxh" },
	];

	return (
		<section className="bg-gradient-to-l from-gray-200 to-slate-200 mx-auto p-10">
			<div className="mx-auto max-w-screen-lg">
				<Typography variant="h2" sx={{ textAlign: "center" }}>
					Contact Me
				</Typography>
				<TableContainer
					component={Paper}
					sx={{ mt: 4, maxWidth: 500, marginInline: "auto" }}>
					<Table
						sx={{ minWidth: 320, maxWidth: 650 }}
						aria-label="contact info table">
						<TableBody>
							{rows.map(row => (
								<TableRow
									key={row.title}
									sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
									<TableCell component="th" scope="row">
										{row.title}
									</TableCell>
									<TableCell align="right">
										{row.value.startsWith("https") ? (
											<a href={row.value} target="_blank">
												{row.value}
											</a>
										) : (
											row.value
										)}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</section>
	);
}

export default HomeContact;
