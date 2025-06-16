import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		mode: "light", // or 'dark'
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#ff4081",
		},
		background: {
			default: "#f9f9f9", // background of pages
			paper: "#ffffff", // card or modal backgrounds
		},
		text: {
			primary: "#333333", // heading and body text
			secondary: "#666666", // muted/secondary text
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
