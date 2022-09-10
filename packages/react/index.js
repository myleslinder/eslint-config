/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: [
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"@myleslinder/eslint-config-ts",
	],
	plugins: ["jsx-a11y", "react-hooks"],
	settings: {
		react: {
			version: "18.0",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
	},
};
