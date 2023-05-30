---
author: 'Marcus Vinicius Richa'
title: 'Babel Transpiler - Overview'
date: '2023-05-29'
subject: 'web-dev-articles'
description: 'Babel is a tool that takes your modern JavaScript code and transpiles it to code that older browsers can work with. Also, it can be used from the command line with a simple command and can be added to some existing building tool, like webpack with the babel-loader package.'
---

# Babel Transpiler - Overview

1. ##### Introduction  
2. ##### Some Basic Configurantions for Babel
3. ##### A Short Example Together with Webpack
	3.1.	
	3.2.
4. ##### 
5. ##### 
6. ##### 
7. ##### 
8. ##### Further Reading
9. ##### References

### Introduction
 

 
###### See also the correlate articles for the Web Dev Packaging System
- `The Webpack - Overview` [^1]
 

###### Other articles about JavaScript and of Patterns:
- `JavaScript Trick Patterns - PartI` [^2]
- `JavaScript Trick Patterns - Part II` [^3]
- `JavaScript Trick Patterns for the DOM - Overview`[^4]   
- `Javascript Object Oriented Programming (OOP) Pattern` [^5]   
- `Front-end Development Patterns` [^6]   
- `Front-end Architectures` [^7]   
- `Software Architecture Patterns - Overview` [^8]   
- `Software Architecture and Design` [^9]



### Introduction

Babel is a tool that takes the modern JavaScript code and transpiles it to code that older browsers can work with. It not only transforms the new syntax into the current browsers versions, but it also have the capability to polyfill missing features to the code.


So, considering only the Babel operation, this tool is specially concerned with transpiling code from one format to another, in the case of JavaScript, transpiling ES6 (or ES2016) to older versions (ES5 or ES1015).


Also, it can be used from the command line with a simple command and can be added to some existing building tool, like webpack with the babel-loader package.


And since a front-end projects alread have their own complex structure to deal with, inserting Babel into a bundler like Weppack could really simplify the general working for the web app - [Babel Loader - GitHub](https://github.com/babel/babel-loader): 


**webpack.config.js**
``` 
const path = require('path');


module.exports = {
	module: {
		rules: [
			test: /\.(?.js|mjs|cjs)$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', { targets: "defaults" }]
					],
					plugins: ['@babel/plugin-proposal-class-properties']
				}
			}
		]
	}
};
``` 


According to [Babel Docs](https://babeljs.io/docs/), since it is most common to have Babel together with a bundler tool, it may appear that its features are merely a configuration effect from those external tools.


Also interesting to see how the article [What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/) explain Babel's most basic operation, when it set a very basic project to help in presenting the Babel tool own capabilities and traits:
1. Create the basic project with **npm init -y**.
2. Install the core Babel tool and its CLI counterpart: **npm install --save-dev @babel/core @babel/cli**.
3. Create a very simple JS script with a **Arrow Function** to be transpiled by the tool.
4. Call Babel from the CLI: **npx babel input.js --out-file output.js**


**input.js**
``` 
const hello = () => console.log('Hello World');
``` 

And the article shows in this very simple example that in its core functionalities, Babel only performs the operation to carry/transfer the code from one end-point to another, **because in this speciffic example, there were no transformation chosen to be applied to the code dumped in the output file!**


This means that as a tool, Babel is structured in order to leave to the developer all the decisions for the transformation to be applied, and since in the example above there was no configuration preset passed to the framework, the code was left unchanged. 


This is a important feature from the Babel transpiling tool, because it brings agility and flexibility to the project under development, since there are no predefined definitions adding more code to clog the project and there is more freedom for the developer itself to personaly choose  whatever to work with while transpiling the codes with Babel.


So, in the aforementioned task, it comes to the Babel Plugins, which are also installed by the NPM packet manager, to execute the desired transformations to the codes.


Then, to apply a basic plugin to transpile only arrow functions, there should be two basic tasks to be done:
1. To install the desired plugin: **npm install --save-dev @babel/plugin-transform-arrow-functions**
2. To define the configuration file for Babel: **.babelrc**


Then, the result of the new job run with the transpiler set with the plugin would bring the desired transformation to the code script:

```
const hello = function () {
  return console.log('Hello World');
};
``` 


Yet according to the article, [What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/), The Babel Foundation have created some common bundles that integrate a variation group of plugins that are called **presets**:
1. @babel/preset-env
2. @babel/preset-flow
3. @babel/preset-react
4. @babel/preset-typescript


Also, it says that are still some unofficial bundles/presets created by other parties like Airbnb, Heck, etc, and that, finally, even the developer itself could use its own custom presets to carry out his transpiling tasks.


But that same article also explain that the basic **preset-env** from Babel that transpiles ES2016 features is set by default to work in a very general fashion, meaning that if it is not accordinlly configured it can create a huge mass of new code to give support to almost every old browser there is (see the image in the article reference). 


### Some Basic Configurantions for Babel

Turning again to the [Babel Docs - Usage](https://babeljs.io/docs/usage), it is possible to see that the Babel module to work with the CLI is very powerfull being capable to receive many parameters by itself:

``` 
./node_modules/.bin/babel src --out-dir lib --presets=@babel/env
``` 

Where all files stashed in the **src** folder are transpiled to the **lib** folder, in this short example.


But as the article explains, since both the CLI and the Preset module are capable of receiving parameters, it could be more simple to pass all those options through configuration files.


At the [configuration section from the Docs](https://babeljs.io/docs/configuration), it is said that there are two basic documents that can be create to do this setting up (current version):
1. **babelrc.json**: a configuration that is more restricted and may only apply to a single part of the project.
2. **babel.config.json**: the best choise to be working to compile node_modules.
3. **Using the .babelrc.json from within the package.json file**
4. Having those same files above as JavaScript files: **babelrc.js** and **babel.config.js**


**babelrc.json**
``` 
{
	"presets": [...],
	"plugins": [...]
}
``` 


**babel.config.json**
``` 
{
	"presets": [...],
	"plugins": [...]
}
``` 


**package.json**
``` 
{
	"name": "my-package",
	"version": "1.0.0",
	"babel": {
		"presets": [...],
		"plugins": [...]
	}
}
``` 


**babel.config.js**
``` 
module.exports = function (api) {
	api.cache(true);
	
	const presets = [...];
	const plugins = [...];
	
	if (process.env["env"] === "prod") {
		plugins.push(...);
	}
	
	return {
		"presets": [...],
		"plugins": [...]
	}
}
``` 


### A Short Example Together with Webpack

Bring it all together into a basic example of Babel transpiler packed into the Webpack tool, we could start by improving the general structure of the project including both a **src** and a **distro** folder:

``` 
webpack-and-babel-demo
  |- package.json
  |- package-lock.json
  |- webpack.config.js
  |- /dist
        |- myArrowFunc.bundle.js
  |- /src
        |- myArrowFunc.js
```


Then we should import all the necessary modules from both Babel and Webpack tools:
1. **@babel/cli**
2. **@babel/core**
3. **@babel/preset-env**
4. **babel-loader**
5. **webpack**
6. **webpack-cli**


**package.json**
``` 
{
  "name": "babel-test",
  "version": "1.0.0",
  "description": "",
  "main": "webpack.config.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.22.1",
    "@babel/preset-env": "^7.22.4",
    "babel-loader": "^9.1.2",
    "webpack": "^5.84.1",
    "webpack-cli": "^5.1.1"
  }
}
```


> Note: 
> See that with this Webpack project structure the module **@babel/cli** is not actually necessary, since the tool is being called with Webpack and its own cli package...


Observe in the **package.json** file that the webpack.config.js is set as the entry point for the project and that it can be run with the script: **npm run build**.


Bellow, there is the basic configuration for the **webpack.config.js**, where we can observe that the Babel transpiler configuration is embeded inside it:


**webpack.config.js**
``` 
const path = require('path');

module.exports = {
	mode: 'development',
  entry: {
		myArrowFunc: './src/myArrowFunc.js',
	},
	module: {
		rules: [
			{
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }]
						]
					}
				}
			}
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	}
};
``` 


Finally, following the same experiment with the arrow function example, we have bellow both the source code and the traspiled code:

**./src/myArrowFunc.js**
```
const hello = () => console.log('Hello World');

hello();
```


**./dist/myArrowFunc.js**
```
(() => { // webpackBootstrap
	var __webpack_modules__ = ({

		"./src/myArrowFunc.js":

		(() => {
			eval("const hello = () => console.log('Hello World');\nhello();\n\n//# sourceURL=webpack://babel-test/./src/myArrowFunc.js?");
		})
	});

	var __webpack_exports__ = {};
	__webpack_modules__["./src/myArrowFunc.js"]();	
})();
``` 


Some final points from the **webpack.config.js**:
1. It is running in the 'development' mode, what implies warnings in the bundle alerting against the use of the created bundle in production.
2. Inside the Babel module of the configuration, the files are tested for JS type extensins and it is being used both Babel packages the necessary for this example: the **babel-loader** for the Webpack run and the **preset-env** as the chosen plugin for transformations.





### Further Reading

- [Babel Docs](https://babeljs.io/docs/)

- [How to Setup Babel in Node.js - FreeCodeCamp](https://www.freecodecamp.org/news/setup-babel-in-nodejs/)

- [How to Webpack 5 with Babel - Setup Tutorial](https://www.robinwieruch.de/webpack-babel-setup-tutorial/)


[]()

### References

- [Babel Docs](https://babeljs.io/docs/)

- [Babel Loader - GitHub](https://github.com/babel/babel-loader)

- [What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/)


[]()


[^1]:the-webpack-overview-2022-07-31


[^2]:javascript-trick-patterns-part-I-2022-05-26

[^3]:javascript-trick-patterns-part-II-2022-07-28

[^4]:javascript-trick-patterns-the-dom-overview-2022-06-25

[^5]:javascript-object-oriented-programming-pattern-2022-07-24

[^6]:front-end-development-patterns-overview-2022-03-04

[^7]:front-end-architectures-2022-03-05

[^8]:software-architecture-patterns-overview-2022-02-18

[^9]:software-architecture-and-design-2022-02-22




