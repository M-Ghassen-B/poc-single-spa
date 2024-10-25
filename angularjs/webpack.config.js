const singleSpaDefaults = require("webpack-config-single-spa");
const { merge } = require("webpack-merge"); // webpack-merge@5.0.3+
const path = require('path');

module.exports = (webpackConfigEnv, argv) => {
	const defaultConfig = singleSpaDefaults({
		// The name of the organization this application is written for
		orgName: "expensya",
		// The name of the current project. This usually matches the git repo's name
		projectName: "angularjs",
		// See https://webpack.js.org/guides/environment-variables/#root for explanation of webpackConfigEnv
		webpackConfigEnv,
		// The CLI commands in the package.json script that triggered this build
		argv,
		// optional
		// This changes whether package names that start with @your-org-name are
		// treated as webpack externals or not. Defaults to true
		orgPackagesAsExternal: false,
	});

	return merge(defaultConfig, {
		output: {
			path: path.resolve(__dirname, '../dist/ajs-app'),
			clean: true
		}
	});
};