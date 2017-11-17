# node-lib-boilerplate

Minimal boilerplate aimed to speed up the process of creating a new NodeJS library.

--------------------------------

[![Travis](https://img.shields.io/travis/jkomyno/node-lib-boilerplate.svg)](https://travis-ci.org/jkomyno/node-lib-boilerplate)
[![npm](https://img.shields.io/npm/v/node-lib-boilerplate.svg)](https://npmjs.com/package/node-lib-boilerplate)
[![npm](https://img.shields.io/npm/dm/node-lib-boilerplate.svg)](https://npmjs.com/package/node-lib-boilerplate)
[![codecov](https://codecov.io/gh/jkomyno/node-lib-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/jkomyno/node-lib-boilerplate) 

- [Overview](#overview)
  - [Features](#features)
- [Contributing](#contributing)
  - [Development Scripts](#development-scripts)
- [Credits](#credits)
- [License](#license)

## Overview

### Features

- **Type safety** with Flow
- **Transpilation to ES\*** with Babel Env
- **Continuos CI** with Travis
- **Test suites** with Jest
- **Test coverage** with Codecov
- **Static code analysis** with Eslint
- **Standard format style** with Editorconfig

## Contributing

PRs are always welcome!

### Development Scripts

- `clean`: Deletes the compiled lib folder;
- `build`: Runs the clean script, transpiles the code with babel to the lib folder and copies the flow references;
- `build:watch`: Runs the build script in watch mode;
- `lint`: Runs eslint;
- `flow`: Verifies if there are flow errors;
- `prepublish`: Runs all the linting/test suites and creates a brand new build;
- `test`: Runs the test suites with jest;
- `test:watch`: Runs the tests in watch mode;
- `test:cov`: Runs the tests and displays coverage (which should't get below 100%!);
- `test:ci`: Tests lint, flow, and jest errors;

You can build your own light version of setting the env.targets property in .babelrc to `"node": "current"`.
The version deployed to npm requires at least NodeJS 8.0.0.

## License

This project is [MIT](LICENSE) licensed.
