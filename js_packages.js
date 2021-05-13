/*----------------
~~~| What is npm? |~~~
------------------- */

//`npm` is a package manager (node package manager) that is used to install, access, and manage Node code packages.
//These code packages or 'modules' are typically produced by other developers and can benefit your projects and repositories in some way.

//You start by running `npm init` in your terminal inside your project. This will create a `package.json` file.
//`package.json` is where key-value pairs are kept that do the following:
//Has the FIRST object containing the project's name, description, main entry file, and any scripts you'd like to run in the terminal. Scripts are basically command line shortcuts you can run (ex: to start, or test your app).
//Scripts can be run with `npm run` + the script's name. (ex: `npm run build`).
//Has a DEPENDENCIES object containing the different modules/packages you have installed & which version.
//Has a DEVDEPENDENCIES object containing the modules/packages that you've used during development in developing your project.

//Running `npm install` in the terminal will create a `node_modules/` directory containing the packages themselves. It is wise to put `node_modules/` in a `.gitignore` file to avoid pushing it to your repo.



/*------------------
~~~| What is Babel? |~~~
--------------------- */

//Babel is a JS library that enables the 'transpilation' of JavaScript. 
//Transpilation, in general, is the act of converting one programming language to another programming language. Transpilation with Babel usually involves transpiling ES6 JavaScript to older versions for better browser support.

//You start by running `npm install babel-cli -D` & `babel-preset-env -D`. Bear in mind these are two separate libraries necessary for Babel: `babel-cli` & `babel-preset-env`.

//It is good to put any ES6 JavaScript code into a directory INSIDE the root directory called `src`. The path to the ES6 code would be `./src/[file name here]`.
//You then create a file `.babelrc` in the ROOT directory and ensure this file contains an object { "preset": ["env"] }. This will instruct Babel that it is transpiling code that belongs to ES6 (& later) syntax.
//You then put a 'script' in your `package.json` file that will initiate the ES6+ to ES5 transpilation. Put `babel src -d lib` as the value to a `build` property under scripts.
//EX: `"build": "babel src -d lib". `babel` is a command to transpile code, `src` instructs which directory the code needing to transpiled is, `-d` instructs to write the code into a directory, `lib` points to said directory.