/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: [
		"@remix-run/eslint-config",
		"@remix-run/eslint-config/node",
		"@remix-run/eslint-config/jest-testing-library",
		"plugin:react-hooks/recommended",
		"@myleslinder/eslint-config/typescript",
	],
	plugins: ["jsx-a11y"],
	settings: {
		jest: {
			version: 27,
		},
		react: {
			version: "18.0",
		},
	},
	ignorePatterns: ["/public/build", "/api"],
};
