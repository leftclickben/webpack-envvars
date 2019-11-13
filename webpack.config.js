const { resolve } = require('path');
const { config } = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Enable the appropriate plugin imports as required
// const DotenvPlugin = require('dotenv-webpack');
// const { EnvironmentPlugin } = require('webpack');
// const { DefinePlugin } = require('webpack');

config();

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/app.ts']
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    // Three different ways of defining environment variables via webpack.

    // #1 DefinePlugin allows you to define any global variables in your bundle.  Here we are filtering the values in
    // our local (build-time) `process.env` to find the ones that start with `WEBPACK_DEMO_` and then building an
    // object from those keys, prefixed with `process.env.`.  This way has the most code and the greatest control.
    //
    // new DefinePlugin(
    //   Object.keys(process.env)
    //     .filter((key) => key.startsWith('WEBPACK_DEMO_'))
    //     .reduce(
    //       (result, key) => ({
    //         ...result,
    //         [`process.env.${key}`]: JSON.stringify(process.env[key])
    //       }),
    //       {}))

    // #2 EnvironmentPlugin is a wrapper for DefinePlugin where we only have to specify the keys, not the values.
    // (Optionally the plugin does allow overriding the values).
    //
    // new EnvironmentPlugin(Object.keys(process.env).filter((key) => key.startsWith('WEBPACK_DEMO_')))

    // #3 This is the way with the least code, but also the least control.  It is restricted to values in your
    // build-time `.env` file, the location of which must be specified.  Actual environment variables (e.g. set within
    // the pipeline or on a build machine) are not supported using this method, unlike the other two methods.
    //
    // new DotenvPlugin({ path: './.env', })

  ],
  node: {
    fs: 'empty'
  }
};
