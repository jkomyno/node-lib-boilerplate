# nodejs-lib-boilerplate

Minimal boilerplate aimed to speed up the process of creating a new NodeJS library.

--------------------------------

[![Travis](https://img.shields.io/travis/jkomyno/nodejs-boilerplate.svg)](https://travis-ci.org/jkomyno/nodejs-boilerplate)
[![npm](https://img.shields.io/npm/v/nodejs-boilerplate.svg)](https://npmjs.com/package/nodejs-boilerplate)
[![npm](https://img.shields.io/npm/dm/nodejs-boilerplate.svg)](https://npmjs.com/package/nodejs-boilerplate)

## Features

- **Type safety** with Flow
- **Transpilation to ES\*** with Babel Env
- **Continuos CI** with Travis
- **Test suites** with Jest
- **Test coverage** with Codecov
- **Static code analysis** with Eslint
- **Standard format style** with Editorconfig

## Available Scripts

- `clean`: Deletes the compiled lib folder;
- `build`: Runs the clean script, transpiles the code with babel to the lib folder and copies the flow references;
- `build:watch`: Runs the build script in watch mode
- `lint`: Runs eslint
- `flow`: Verifies if there are flow errors;
- `test`: Runs the test suites with jest;
- `test:watch`: Runs the tests in watch mode;
- `test:cov`: Runs the tests and displays coverage (which should't get below 100%!)
- `test:ci`: Tests lint, flow, and jest errors

You can build your own light version of setting the env.targets property in .babelrc to `"node": "current"`.
The version deployed to npm requires at least NodeJS 8.0.0.

## License

This project is [MIT](LICENSE) licensed.
