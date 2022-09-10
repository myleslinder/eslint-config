/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: [
		"plugin:react-hooks/recommended",
		"@myleslinder/eslint-config/typescript",
	],
	plugins: ["jsx-a11y", "react-hooks"],
	settings: {
		react: {
			version: "18.0",
		},
	},
};
