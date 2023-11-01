/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
	content: ['./src/**/*.{svelte,html,js,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.red,
				secondary: colors.yellow
			}
		}
	},
	plugins: []
};
