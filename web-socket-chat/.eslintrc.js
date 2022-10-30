// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
			parser: "babel-eslint",
			sourceType: "module"
	},
	env: {
			browser: true
	},
	globals: {
			NODE_ENV: "readonly",
			WS: "readonly"
	},
	extends: [
			"airbnb-base",
			"plugin:vue/recommended",
			"plugin:cypress/recommended",
			"prettier"
	],
	// required to lint *.vue files
	plugins: ["vue", "prettier", "vuetify"],
	// check if imports actually resolve
	settings: {
			"import/resolver": {
					webpack: {
							config: "build/webpack.base.conf.js"
					}
			}
	},
	// add your custom rules here
	rules: {
			"prettier/prettier": ["warn"],

			// don't require .vue extension when importing
			"import/extensions": [
					"error",
					"always",
					{
							js: "never",
							vue: "never"
					}
			],

			"import/prefer-default-export": ["off"],

			// disallow reassignment of function parameters
			// disallow parameter object manipulation except for specific exclusions
			"no-param-reassign": [
					"error",
					{
							props: true,
							ignorePropertyModificationsFor: [
									"state", // for vuex state
									"acc", // for reduce accumulators
									"e" // for e.returnvalue
							]
					}
			],

			// allow optionalDependencies
			"import/no-extraneous-dependencies": [
					"error",
					{
							optionalDependencies: ["test/unit/index.js"]
					}
			],

			// allow debugger during development
			"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

			"vue/html-indent": [
					"error",
					4,
					{
							attribute: 1,
							closeBracket: 0,
							alignAttributesVertically: true,
							ignores: []
					}
			],

			"no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
			"vue/max-attributes-per-line": ["off"],
			"vuetify/no-deprecated-classes": "error"
	}
}
