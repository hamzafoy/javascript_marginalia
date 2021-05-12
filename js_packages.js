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