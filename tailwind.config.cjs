/** @type {import('tailwindcss').Config} */

export default {
	content: ['./lib/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
	},
	plugins: [require('flowbite/plugin')],
};
