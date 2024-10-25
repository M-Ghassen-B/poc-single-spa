const path = require("path");
const singleSpaDefaults = require("webpack-config-single-spa");
const { merge } = require("webpack-merge"); // webpack-merge@5.0.3+

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
      orgName: "expensya",
      projectName: "react",
      webpackConfigEnv,
      argv,
    });
  
    return merge(defaultConfig, {
      output: {
        path: path.resolve(__dirname, '../dist/mfe-react'),
        clean: true
      },
      module: {
        rules: [
            {
                test: /.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}] ],
                    }
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts','.tsx', '.js', '.jsx'],
      }
    });
  };