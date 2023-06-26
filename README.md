# alx-frontend-javascript

This repository contains frontend JavaScript projects developed as part of the ALX Software Engineering program.

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the js extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup

1. Install NodeJS 12.11.x in your home directory:
```shell
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
```
## Install Jest, Babel, and ESLint in your project directory:
```
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
```
## Configuration files

### package.json
```
{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "babel-jest": "^27.0.6",
    "@babel/core": "^7.14.6",
    "@babel/preset-env": "^7.14.7",
    "eslint": "^7.30.0",
    "jest": "^27.0.6"
  }
}
```
### babel.config.js
```
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12.11',
        },
      },
    ],
  ],
};
```
## .eslintrc.js
```
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  env: {
    'jest/globals': true,
    'node': true,
    'es6': true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    // Add specific ESLint rules if needed
  }
};
```
### Finally...

Don’t forget to run npm install from the terminal of your project folder to install all necessary project dependencies.

### Author
Olayeye Muideen [frontendgeek]

