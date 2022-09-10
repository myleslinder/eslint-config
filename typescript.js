/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	extends: ["plugin:@typescript-eslint/recommended", "@myleslinder/base"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {
		// TS
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{ "ts-ignore": "allow-with-description" },
			{ "ts-error": "allow-with-description" },
		],
		"@typescript-eslint/no-floating-promises": "error",
		"@typescript-eslint/no-misused-promises": "error",
		"@typescript-eslint/no-unused-vars": "off",
		"@typescript-eslint/consistent-type-imports": "warn",
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{ multiline: { delimiter: "none" } },
		],
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/prefer-ts-expect-error": "error",

		// Override JS
		"no-useless-constructor": "off",
		indent: "off",
		"no-unused-vars": "off",
		"no-redeclare": "off",
		"@typescript-eslint/no-redeclare": "error",
		"no-dupe-class-members": "off",
		"@typescript-eslint/no-dupe-class-members": "error",
		"no-loss-of-precision": "off",
		"@typescript-eslint/no-loss-of-precision": "error",

		// off
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-member-accessibility": "off",
		"@typescript-eslint/parameter-properties": "off",
		"@typescript-eslint/no-empty-interface": "off",
		"@typescript-eslint/ban-ts-ignore": "off",
		"@typescript-eslint/no-non-null-assertion": "off",
		"@typescript-eslint/explicit-module-boundary-types": "warn",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/triple-slash-reference": "off",
	},
};
