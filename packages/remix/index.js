/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: [
		"@remix-run/eslint-config",
		"@remix-run/eslint-config/node",
		"@remix-run/eslint-config/jest-testing-library",
		"@myleslinder/eslint-config-react",
		"@myleslinder/eslint-config-ts",
	],
	settings: {
		jest: {
			version: 27,
		},
	},
	ignorePatterns: ["/public/build", "/api"],
};
