/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	reportUnusedDisableDirectives: true,
	extends: ["eslint:recommended", "plugin:yml/standard", "prettier"],
	ignorePatterns: [
		"*.min.*",
		"*.d.ts",
		"CHANGELOG.md",
		"dist",
		"LICENSE*",
		"output",
		"coverage",
		"public",
		"temp",
		"package-lock.json",
		"pnpm-lock.yaml",
		"yarn.lock",
		"__snapshots__",
		"!.github",
		"!.vitepress",
		"!.vscode",
		"/node_modules",
		"/build",
	],
	plugins: ["unicorn"],
	overrides: [
		{
			files: ["*.yaml", "*.yml"],
			parser: "yaml-eslint-parser",
			rules: {
				"spaced-comment": "off",
			},
		},
		{
			files: ["scripts/**/*.*", "cli.*"],
			rules: {
				"no-console": "off",
			},
		},
	],
	rules: {
		// Common
		"no-unused-vars": "warn",
		"no-param-reassign": "off",
		"no-constant-condition": "warn",
		"no-debugger": "error",
		"no-console": ["error", { allow: ["warn", "error"] }],
		"no-cond-assign": ["error", "always"],
		"no-restricted-syntax": [
			"error",
			"DebuggerStatement",
			"LabeledStatement",
			"WithStatement",
		],
		"no-return-await": "off",

		// es6
		"no-var": "error",
		"prefer-const": [
			"error",
			{
				destructuring: "any",
				ignoreReadBeforeAssign: true,
			},
		],
		"prefer-arrow-callback": [
			"error",
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		"object-shorthand": [
			"error",
			"always",
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		"prefer-exponentiation-operator": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"generator-star-spacing": "off",

		// best-practice
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"consistent-return": "off",
		complexity: ["off", 11],
		eqeqeq: ["error", "smart"],
		"no-alert": "warn",
		"no-case-declarations": "error",
		"no-multi-str": "error",
		"no-with": "error",
		"no-void": "error",
		"no-useless-escape": "off",
		"vars-on-top": "error",
		"require-await": "off",
		"no-return-assign": "off",

		// unicorns
		// Pass error message when throwing errors
		"unicorn/error-message": "error",
		// Uppercase regex escapes
		"unicorn/escape-case": "error",
		// Array.isArray instead of instanceof
		"unicorn/no-instanceof-array": "error",
		// Prevent deprecated `new Buffer()`
		"unicorn/no-new-buffer": "error",
		// Keep regex literals safe!
		// "unicorn/no-unsafe-regex": "off",
		// Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
		"unicorn/number-literal-case": "error",
		// includes over indexOf when checking for existence
		"unicorn/prefer-includes": "error",
		// String methods startsWith/endsWith instead of more complicated stuff
		"unicorn/prefer-string-starts-ends-with": "error",
		// textContent instead of innerText
		"unicorn/prefer-text-content": "error",
		// Enforce throwing type error when throwing error while checking typeof
		"unicorn/prefer-type-error": "warn",
		// Use new when throwing error
		"unicorn/throw-new-error": "error",

		"no-use-before-define": [
			"error",
			{ functions: false, classes: false, variables: true },
		],

		// yml
		"yml/quotes": ["error", { prefer: "single", avoidEscape: false }],
		"yml/no-empty-document": "off",
	},
};
