/*-----------------------------
~~~| What is the GLOBAL SCOPE? |~~~
-------------------------------- */

// Variables defined outside of specified code blocks are in the global scopes & often called global variables.
// Since global variables are not bound inside a specified code block, they can be accessed by any code in the program including code in specified code blocks.
// Declared global variables go to the 'global namespace' which allows these variables to be accessible from anywhere in the program.

//EXAMPLE

const favoriteDessert = 'knafeh';

const returnFavoriteDessert = () => favoriteDessert;

console.log(returnFavoriteDessert());



/*-----------------------------
~~~| What is the GLOBAL SCOPE? |~~~
-------------------------------- */

//Variables defined inside a code block is only accessible to code within the same code block {}. These variables has block scope and are known as local variables.

//EXAMPLE

const returnFavoriteMovie = () => {
    let favoriteMovie = 'The Shawshank Redemption';
    console.log(favoriteMovie);
}

console.log(favoriteMovie); //Expect a 'ReferenceError', you are trying to read a value that is NOT in the global scope. Code outside the specified code block {} where the value is found cannot use said value.
returnFavoriteMovie();



/*---------
~~~| INDEX |~~~
------------ */

// * Scope is the context in which variables are declared. Variables can exist either outside or inside specified code blocks {} such as belonging to variables, functions, or if statements.
// * Be careful and try to keep variables needed throughout the program in the local scope. Do not reuse variables across different scopes.