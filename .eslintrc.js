module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"es2021": true,
	},
	"extends": [
		"react-app",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:testing-library/react",
		"plugin:jest/recommended",
	],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"testing-library",
		"jest",
	],
	"rules": {
		"linebreak-style": [
			"warn",
			"unix"
		],
		"quotes": [
			"warn",
			"double"
		],
		"semi": [
			"warn",
			"always"
		],
		"no-unused-vars": ["warn", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
		"testing-library/await-async-query": "warn",
		"testing-library/no-await-sync-query": "warn",
		"testing-library/no-debugging-utils": "warn",
		"testing-library/no-dom-import": "off",
		"react/prop-types": "off"
	}
};
