/*----------------------------------
~~~| What is a RUNTIME ENVIRONMENT? |~~~
------------------------------------- */

//Runtime environments are where your program(s) are to be executed.
//Which runtime environment your program runs on determines what GLOBAL OBJECTS your program can access.
//In general, JavaScript is typically seen running on two runtime environments:
// 1. BROWSER: includes Chrome, Firefox, & the eventually out-of-service Internet Explorer.
// 2. NODE: A runtime environment that is separate from the browser.



/*--------------------------------------------
~~~| What is the BROWSER RUNTIME ENVIRONMENT? |~~~
----------------------------------------------- */

//Applications created for & executed in the browser are typically referred to as front-end applications.
//Browsers usually have global objects such as `window` and can be accessed through your written JS programming.



/*-----------------------------------------
~~~| What is the NODE RUNTIME ENVIRONMENT? |~~~
-------------------------------------------- */

//Node, created in 2009, allowed programmers to develop apps that no longer relied on a browser.
//Node gives access to global objects such as `process` which contains data related to a JavaScript file being executed.
//Applications designed for the Node are usually back-end applications OR full-stack (front & back end) applications.
//Back-end applications have access to file systems, databases, & networks attached to a server.



/*---------------------
~~~| What is a MODULE? |~~~
------------------------ */

//A module is a reuseable piece, block, or file of code that can be exported then imported for use in a program or programs.
//The ability to separate components of code, use them individually or combine them in any number of ways makes for a MODULAR PROGRAM.
//Separating code to create modular programs is sometimes referred to as 'separation of concerns' ahd have the following benefits:
// 1. Makes for easier debugging and fixing of code.
// 2. Allows the recycling of defined logic in different parts of your program.
// 3. Prevents pollution of the global scope & namespace and avoids naming collisions for created variables.

//MODULES can be implemented in two ways:
// 1. ES6 Syntax: `import` & `export`.
// 2. Vanilla Node.js syntax: `modules.export` & `require()` method.