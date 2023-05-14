module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
				caughtErrorsIgnorePattern: "^_",
			},
		],
		"react/react-in-jsx-scope": "off",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/display-name": "off",
		"prettier/prettier": [
			"error",
			{},
			{
				usePrettierrc: true,
			},
		],
	},
};
