module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
	env: {
		browser: true,
		amd: true,
		node: true,
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'prettier',
		'eslint-config-prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'vue/html-closing-bracket-newline': [2, { multiline: 'never' }],
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
