---
author: 'Marcus Vinicius Richa'
title: 'The Webpack - Overview'
date: '2022-07-31'
subject: 'web-dev-articles'
description: 'The Webpack is a tool for bundling modules or in another words, a tool for compiling JavaScript modules. And once installed it can be interacted with from the CLI or API.'
---

# The Webpack - Overview

1. ##### Introduction
2. ##### The Webpack
    2.1. Webpack's Basic Concepts    
    2.2. Webpack's Configuration File   
    2.3. Webpack's Asset Management    
    2.4. Webpack's Output Management   
    2.5. Webpack Resources: Deeper into the Webpack Operation
3. #####
4. #####
5. #####
6. #####
7. ##### Further Reading
8. ##### References

### Introduction
 


###### Other articles about JavaScript and of Patterns:
- `JavaScript Trick Patterns - PartII` [^1]
- `JavaScript Trick Patterns - Part II` [^2]
- `JavaScript Trick Patterns for the DOM - Overview`[^3]   
- `Javascript Object Oriented Programming (OOP) Pattern` [^4]   
- `Front-end Development Patterns` [^5]   
- `Front-end Architectures` [^6]   
- `Software Architecture Patterns - Overview` [^7]   
- `Software Architecture and Design` [^8]



### The Webpack

The **Webpack** is simply a tool for bundling modules or in another words, a tool for compiling JavaScript modules. And once installed it can be interacted with from the CLI or API. 


So, a basic installation of webpack for a new project could be:

``` 
$ mkdir webpack-demo
$ cd webpack-demo
$ npm init -y
npm install webpack webpack-cli --save-dev
```

The flag **-y** quickly configure default option for the new project and than **--save-dev** define webpack as a development dependency. Another point made by the Webpack Docs is the care to change the configuration of package.json for projects that are not for publishing:

```
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1"
   },
   "keywords": [],
   "author": "",
   "license": "MIT",
   "devDependencies": {
     "webpack": "^5.38.1",
     "webpack-cli": "^4.7.2"
   }
 }
``` 

Above, the entry point property, **"main": 'index.js'**, was excluded and the private property included. And in the JS script the Docs example uses the Library **Lodash** which come linked in the HTML file.


```
<script src="https://unpkg.com/lodash@4.17.20"></script>
```

But, this is far from being a ideal set for a professional project:

1. It's not immediately apparent that the script depends on an external library.
2. If a dependency is missing, or included in the wrong order in the HTML file, the application will not function properly.
3. If a dependency is included but not used, the browser will be forced to download unnecessary code.
4. It creates problems of maintainnability, since dependencies have to be manually checked and updated.


Before start using the bundler features, the Docs propose to change the directory structure creating a **dist** folder for the minimazed and optimized output.

In the example below the file index.html was changed to the the **dist** folder, but it could also be generated automatically, and **dist** could be left empty:

```
webpack-demo
  |- package.json
  |- package-lock.json
  |- /dist
        |- index.html
  |- /src
        |- index.js
```


Then, its necessary to have the dependency installed localy:

```
$ npm install lodash --save
``` 

`In this setup, index.js explicitly requires lodash to be present, and binds it as _ (no global scope pollution). By stating what dependencies a module needs, webpack can use this information to build a dependency graph. It then uses the graph to generate an optimized bundle where scripts will be executed in the correct order.`[Webpack Docs](https://webpack.js.org/guides/getting-started/)


Then the docs define the call for the Webpack binary by the **npx** command from Node 8.2/npm 5.2.0 or higher, considering that its place of origin in the **node_modules** folder is **./node_module/.bin/webpack**:


```
$ npx webpack
[webpack-cli] Compilation finished
asset main.js 69.3 KiB [emitted] [minimized] (name: main) 1 related asset
runtime modules 1000 bytes 5 modules
cacheable modules 530 KiB
  ./src/index.js 257 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 530 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 1851 ms
``` 


The Webpack Docs also points out that:
1. **Webpack 'transpiles' import and export statements by default**
2. **But, other features that need to be transpiled should be done by the use of transpiler tools like Babel, via webpack's loader system**



#### Webpack's Basic Concepts

Interesting to point here also some final Webpack concepts that direct the general operation for the tool:

1. Webpack works as a static module bundler:  
    1.1. It internally processes the applicatoin and builds a **dependency graph** which can have 1 or more **entry points** and also output in 1 or more final bundles, as static assets to serve content for the project.
2. **Entry point**: this indicate the initial operation for webpack to start constructing the internal dependency graph.    
    2.1. By default: **./src/index.js**
    2.2. It can multiple entrie pointis, but once initiated the process, webpack would directly or indirectly figure out the tree of modules dependencies.
3. **Output**: it defines where to place and how to name the final bundle(s) webpack creates.  
    3.1. By defaul: **./dist/main.js**
4. **Loaders**: out of the box, webpack only understand **JavaScript** and **JSON** files, but loaders allow webpack to process other types of files and convert them into valid modules to be added to the dependency graph.  
    4.1. The basic 2 properties in configuration here are: **test** and **use**.  
    4.2. The configuration property **test** allows the identification of file or files to be worked upon. For example: **{ module.rules.test: /\.txt$/ }**   
    4.3. The configuration property **use** indicates which is the right loader to be used for transforming the file(s) apointed. For example: **{ module.rules.use: 'raw-loader' }**
5. **Plugins**: according to the Docs, the plugins allow for a wider ranger of tasks like: buldle optimization, asset management, injection of enviroment variables, etc.   
    5.1. The plugins have to be required() in the webpack's configuration file.
6. **Mode**: here it is possible to enable the webpack's built-in optimizations that correct corresponds to each kind of environment: **developement**, **production**, or **none**.
7. **Browser compatibility**: Webpack supports all browsers that are ES5-compliant.   
    7.1. IE8 or older browsers in general will need to load polyfill to work properly with Webpack. 
8. **Environment**: Webpack 5 runs on Node.js version 10.13.0+.



###### Out of The Plugins for Webpack

Below, there's a list of some very common plugins to be used that are recognized by default by Webpack. And complete lists can be found here:

1. Out of the box plugins: [default-webpack-plugins](https://webpack.js.org/plugins/)
2. Third-party plugins: [awesome-webpack](https://webpack.js.org/awesome-webpack/#webpack-plugins)


- **EnvironmentPlugin**:

    Its a shorthand for using the DefinePlugin on process.env keys
    
- **EslintWebpackPlugin**:

    A ESLint plugin for webpack.
   
- **HtmlWebpackPlugin**:

    Easily create HMTL files to serve your bundles
    
- **IgnorePlugin**:

    Exclude certain modules from bundles.
    
- **LimitChunkCountPlugin**:

    Set min/max limits for chunking to better control chunking.
    
- **MinChunkSizePlugin**:

    Keep chunk size above the specified limit.
    
- **MiniCssExtractPlugin**:

    Creates a CSS file per JS file which requires CSS.
    
- **NoEmitOnErrorsPlugin**:
    Skip the emitting phase when there compilation errors.



#### Webpack's Configuration File

According to the Docs, from the version 4 ahead, Webpack simplified configuration for basic projects excluding the need for a speciffic cofiguration file. So, in its default configuration it assumes:

1. **src/index.js**: entry point.
2. **dist/main.js**: output filename


But, more complex projects will benefit from setting a configuration file. So, at the root level of the project, the **webpack.config.js** should be added:

```
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

Above, it was used the Node's built-in **path module** and the prefix **__dirname** that is set for the root path (the global path):

`his prevents file path issues between operating systems and allows relative paths to work as expected. See this section for more info on POSIX vs. Windows paths.` [Webpack Docs](https://webpack.js.org/configuration/)


Now, if the **webpack.config.js** is the only configuration for the project, the webpack tool can catch it by default, but in more complex setups a custom file can be passed or even have the configuration splited in multiple files. 

Be as it may, just run the **npx** tool flagged with the webpack configuration file(s):

```
$ npx webpack --config webpack.config.js

```

Finally, to improve the basic workflow for the project, instead of calling webpack by the npx tool from the Node/npm, it can be directly setted in a script in package.json file:

```
{
   "name": "webpack-demo",
   "version": "1.0.0",
   "description": "",
   "private": true,
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "build": "webpack"
   },
   "keywords": [],
   "author": "",
   "license": "ISC",
   "devDependencies": {
     "webpack": "^5.4.0",
     "webpack-cli": "^4.2.0"
   },
   "dependencies": {
     "lodash": "^4.17.20"
   }
 }
``` 

And then it can be run by the **npm run build** command.






#### Webpack's Asset Management    

According to [Webpack Docs](https://webpack.js.org/guides/asset-management/), the tradition task of asset management with tools like **grunt** and **gulp** would consist of moving the assets from a project development folder like **./src** into a realease one like **./dist** or **./build**.


But, that in the case of Webpack, eventhough the essential task would remain the same, the fact that this tools operates with a current or dynamically bundle of all the dependencies (the dependency graph), Webpack could insert more flexibility into its build by bundling only actual dependencies being requested by each module of the project build.


Plus, its **loader feature** which lets it deal with other kinds of languages different from JS, allow webpack to replicate the same workflow to the assets being managed and, so, to also apply explicity dependencies to other assets, like CSS, for example.


```
// package.json
{
  "name": "webpack1",
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
    "css-loader": "^6.7.1",
    "csv-loader": "^3.0.5",
    "json5": "^2.2.1",
    "style-loader": "^3.3.1",
    "toml": "^3.0.0",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "xml-loader": "^1.2.1",
    "yamljs": "^0.3.0"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}

// ./src/style.css
@font-face {
    font-family: 'MyFont';
    src: url('./BhuTukaExpandedOne-Regular.ttf') format('ttf');
    font-weight: 400;
}

.hello {
    font-family: 'MyFont', cursive;
    color: red;
    background: url('./icon.png');
}

// ./src/index.js
// Libraries
import _ from 'lodash';

// Assets - style
import './style.css';

// Assets - images
import Icon from './icon.png';

// Assets - data
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

// testing data parsed  by webpack's costumized json configuration
console.log(toml.title); // 'TOML Example'
console.log(toml.owner.name); // 'Tom Preston-Werner'

console.log(yaml.title); // 'YAML Example'
console.log(yaml.owner.name); // 'Tom Preston-Werner'

console.log(json.title); // 'JSON5 Example'
console.log(json.owner.name); // 'Tom Preston-Werner'


function component() {
    const element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    element.classList.add('hello');
    
    // Add the image to the existing div
    const myIcon = new Image();
    myIcon.src = Icon;
    
    element.appendChild(myIcon);
    
    console.log(Data);
    console.log(Notes);
    
    return element;
}

document.body.appendChild(component());
``` 


So, in this small project, Webpack Docs is using as dependencies **style-loader** and **css-loader**:


```
$ npm install style-loader css-loader --save-dev
```

And in its configuration file the module loaders chains works in the reverse order, from the last to the first one in the array, acting like mixins where each one applies its transformations passing the results into the chain flow.


``` 
// webpack.config.js
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: { 
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },
};
```

`The above order of loaders should be maintained: 'style-loader' comes first and followed by 'css-loader'. If this convention is not followed, webpack is likely to throw errors.` [Webpack Docs](https://webpack.js.org/guides/asset-management/)


So, the result here is that through the regex definition there to catch CSS assets, each time a import **./styles.css** enters as dependencies for a module, webpack will resolve by applying stringified css into a HTML Style tag inserted into the Head section of the file.


###### Now, Going All in Loading Images

Here, theres a new test case to be added into the webpack module configuration:

```
// webpack.config.js
...
module: {
    rules: [
        { /* test CSS */ },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
    ]
}
```

So, here also happens a similar process already seem above, because where some import is made within a module, the image cought be the test will be added as asset dependency and some MyImage variable that will be responsible to carry the **final URL** for the respect image, which, in turn, will be loaded into the HTML file as **<img src="./my-image.png" />** by the html-loader, just like in the case of the css-loader inserting stringified CSS into a Style tag, 


###### Going For the Data

As it was seem before, Webpack can use JSON by default, but with the correct loader it can also tackled any other data types available: CSVs, TSVs, XML, etc.

```
$ npm install --save-dev csv-loader xml-loader
```

And the **webpack.config.js** file:

```
module: {
    { /* other assets loaders */ },
    {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
    },
    {
        test: /\.xml$/i,
        use: ['xml-loader'],
    }
}
``` 

Now, it is possible for the JS module to import any of the types of data and get a Data variable containing a parsed JSON for the module consumption.


- **Tip from the Webpack Docs**:
- This can be especially helpful when implementing some sort of data visualization using a tool like d3. Instead of making an ajax request and parsing the data at runtime you can load it into your module during the build process so that the parsed data is ready to go as soon as the module hits the browser.


And, eventhough JSONs are understandible by default, Webpack Docs says that the tool would still allow for the customization of JSON files being consumed nonetheless:

```
$ npm install --save-dev toml yamljs json5
```

And below the configuration for the customization of the JSON parsing fror the modules:


```
// webpack.config.js
module: {
    { /* other assets loaders */ },
    {
    test: /\.toml$/i,
    type: 'json',
    parser: {
        parse: toml.parse,
    },
    },
    {
    test: /\.yaml$/i,
    type: 'json',
    parser: {
        parse: yaml.parse,
    },
    },
    {
    test: /\.json5$/i,
    type: 'json',
    parser: {
        parse: json5.parse,
    },
}
``` 

- **Note**:
- The JSON5 Data Interchange Format (JSON5) is a superset of JSON that aims to alleviate some of the limitations of JSON by expanding its syntax to include some productions from ECMAScript 5.1. This JavaScript library is the official reference implementation for JSON5 parsing and serialization libraries ([JSON5](https://json5.org/)).


###### Wrapping Up: Webpack and Assets

Wrapping up this small project test to try out some of the speciffic configurations from Webpack for a variaty of assest (CSS, Images, Fonts, Different types of data), the [Webpack Docs](https://webpack.js.org/guides/asset-management/) highlights again that tackling tasks with such workflow from Webpack modules and its assets are grouped in a more intuitive away.

So, instead of `relying on a global ./assets directory that contains everything, you can group assets with the code that uses them. For example, a strucutre like this can be useful:` 


```
 |– /components
 |   |– /my-component
 |   |   |– index.jsx
 |   |   |– index.css
 |   |   |– icon.svg
 |   |   |– img.png
``` 


#### Webpack's Output Management

Still according to the Webpack Docs, the workflow that has been implemented is a solid one to be used in small and medium projects, but as the application grows, it also becomes a problem o maintainability to manually handle the insertion of all and every asset into the index.html file.


And things get even harder when there are multiples outputs with different bundles being presented for the final project presentation. So, for these instances the Docs says that there are some plugins available to make all these process easier to manage.


Then, as a practice the Docs present this small experimental project:

```
// project folder
webpack-demo
  |- package.json
  |- package-lock.json
  |- webpack.config.js
  |- /dist
  |- /src
    |- index.js
    |- print.js
  |- /node_modules
```


In the **./src** folder, these are the initial scripts:

```
// ./src/print.js
export default function printMe() {
    console.log('I get called from print.js!');
}


// ./src/index.js
// Libraries
import _ from 'lodash';

// Modules
import printMe from './printMe.js';


function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    element.appendChild(btn);
    
    return element;
}

document.body.appendChild(component());
```


As for the initial configuration of the project:
1. **package.json**
2. **webpack.config.js**


```
// package.json
{
  "name": "webpack1",
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
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  }
}

// webpack.config.js
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    output: { 
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
```


In this initial run of the experiment using a manually created index.html in the **./dist** works, but each time new additions are made to the bundles, or even when their names are updated, the project is going to need a manual correction also.


That's when the plugin **HtmlWebpackPlugin** comes forth:

```
$ npm install --save-dev html-webpack-plugin
```

And for the **webpack.config.js**:

```
// webpack.config.js
const path = require('path');

module.exports = {
   entry: { /* ... */ },
   plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: { 
        /* ... */,
        clean: true,
    },
};
``` 

Now, with the set of configuration, the HtmlWebpackPlugin will automatically create a new index.html file or overwrite with there is one already. And bellow is a example of the file that was created that brings the 2 separated outputs:

1. **./dist/index.bundle.js**
2. **./dist/print.bundle.js**

```
<!doctype html><html><head><meta charset="utf-8"><title>Output Management</title><meta name="viewport" content="width=device-width,initial-scale=1"><script defer="defer" src="index.bundle.js"></script><script defer="defer" src="print.bundle.js"></script></head><body></body></html>
``` 


Another important measure to have a more manageble project is to start cleaning the **./dist** folder, since webpack does not keep track of which files are currently in use. 

And for that reason the **clean: true** property was added in the webpack.config.js configuration, making webpack clean the entire output folder before discharging the new bundles in it.











#### Webpack Resources: Deeper into the Webpack Operation
- [Code Splitting - Webpack Docs](https://webpack.js.org/guides/code-splitting/)
- [Caching - Webpack Docs](https://webpack.js.org/guides/caching/)
- [Manually Bundling an Application](https://www.youtube.com/watch?v=UNMkLHzofQI)
- [Live Coding a Simple Module Bundler](https://www.youtube.com/watch?v=Gc9-7PBqOC8)
- [Detailed Explanation of a Simple Module Bundler](https://github.com/ronami/minipack)








### Further Reading

- [Modern JavaScript Explained For Dinosaurs - Peterxjang.com](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)

[Learning JavaScript Design Patterns - Addy Osmani](https://www.patterns.dev/posts/classic-design-patterns/)

[MDN plataform](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) 

[The Modern JavaScript Tutorial - Javascript.info](https://javascript.info/object)

[DOM Enlightenment - Cody Lindley - Domenlightenment.com](http://domenlightenment.com/)

[Adequately Good (decent programming advice) - Adequatelygood.com](https://www.adequatelygood.com/)

[Eloquent JavaScript - Marijn Haverbeke - EloquentJavascript.net](https://eloquentjavascript.net/)

[Vanilla JavaScript for building powerful web applications - Plainjs.com](https://plainjs.com/)

[How to Redirect Website from HTTP to HTTPS? - GeekFlare](https://geekflare.com/http-to-https-redirection/)

[You Don't Know JS (YDKJS) - Github Book](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed#titles)

[How JavaScript Works - Douglas Crockford](https://www.crockford.com/books.html)

[JavaScript: The Good Parts: The Good Parts - Douglas Crockford](https://www.crockford.com/books.html)

[Even Faster Web Sites: Performance Best Practices for Web Developers - Douglas Crockford](https://www.crockford.com/books.html)


[]()


### References

- [Asset Management - Webpack Docs](https://webpack.js.org/guides/asset-management/)

- [Output Management - Webpack Docs](https://webpack.js.org/guides/output-management/)

- [Development - Webpack Docs](https://webpack.js.org/guides/development/)


[]()


[^1]:javascript-trick-patterns-part-I-2022-05-26

[^2]:javascript-trick-patterns-part-II-2022-07-28

[^3]:javascript-trick-patterns-the-dom-overview-2022-06-25

[^4]:javascript-object-oriented-programming-pattern-2022-07-24

[^5]:front-end-development-patterns-overview-2022-03-04

[^6]:front-end-architectures-2022-03-05

[^7]:software-architecture-patterns-overview-2022-02-18

[^8]:software-architecture-and-design-2022-02-22



