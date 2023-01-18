/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	plugins: [],
	safelist: [
		'bg',
	],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				dark: {
				600: "#211c2e",
				700: "#1b1726",
				800: "#1a181f",
				900: "#15131a",
				},
			},
			fontFamily: {
				minecraft: ["Minecraftia-Regular", "sans-serif"],
			},
			backgroundSize: {
				"0w": "0% 3px",
				"100w": "100% 3px",
			},
			width: {
				"fit-content": "fit-content",
			},
			boxShadow: {
				solid: "0px 3px 0px",
			},
		},
	},
};
