/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
	theme: {
		extend: {},
	},
	safelist: [
		{
			pattern: /col-(span|start|end)-\d+/,
		},
		{
			pattern: /row-(span|start|end)-\d+/,
		},
		{
			pattern: /grid-(cols|rows)-\d+/,
		},
		{
			pattern:
				/^(bg|text|border|ring)-(slate|gray|zinc|neutral|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)(-)?(100|200|300|400|500|600|700|800|900)?$/,
		},
	],

	plugins: [require('flowbite/plugin')],
};
