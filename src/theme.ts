import { createTheme } from "@mui/material/styles";
import { purple, cyan, grey } from "@mui/material/colors";

export const theme = createTheme({
	palette: {
		mode: "light", // or 'dark'
		primary: {
			main: purple[500], // main brand color
		},
		secondary: {
			main: cyan[500], // accent color for buttons or highlights
		},
		background: {
			default: grey[50], // background of pages
			paper: "#ffffff", // card or modal backgrounds
		},
		text: {
			primary: grey[900], // heading and body text
			secondary: grey[700], // muted/secondary text
		},
	},
	typography: {
		fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
		h1: {
			fontSize: "2.5rem",
			fontWeight: 700,
		},
		h2: {
			fontSize: "2rem",
			fontWeight: 600,
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.6,
		},
	},
	shape: {
		borderRadius: 8,
	},
});
