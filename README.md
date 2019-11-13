# Webpack environment variables demonstration

Demonstration of how to use environment variables in the frontend using webpack.

## Repo contents

The `webpack.config.js` file contains three examples of setting environment variables at build time to be used at runtime.  See comments in that file for details.

The rest of the repo is a very simple web app that simply displays a message containing an environment variable.  The application does not use any framework or rendering library, it is just plain DOM interactions.

## Using the repo

1. Have a recent version of Node
2. Install dependencies: `npm install`
3. Comment out one of the methods for including environment variables in `webpack.config.js` (and the relevant `require` statement)
4. Run the server with the relevant environment variable set (see below)
5. Visit http://localhost:8082/ to see the running application, you should see `some-value` in the printed message

## Setting environment variables

To replicate how environment variables are applied in the build pipeline, through variables set either in the pipeline or on a build machine, set an environment variable for the `npm start` command (or specifically, for the `npm run build` command, which is executed automatically before `npm start`).

For example, in `bash`:

```
WEBPACK_DEMO_FOO=some-value npm start
```

To simulate what you would normally do in local dev, instead of setting an actual environment variable, set the environment variable in a file named `.env` in the same directory as this README (you can copy `.template.env`).

In both cases, check the `dist/bundle.js` file and note the value of the environment variable has been inlined.
