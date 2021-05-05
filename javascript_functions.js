/*-----------------------------------
~~~| What is a FUNCTION DECLARATION? |~~~
-------------------------------------- */

//Basic Function Declaration
 /* 1 */ /* 2 */
function greet() {
    console.log('Hello!'); /* 3 */
};

greet();



//Function Declaration with Parameters
                  /*    4     */
function calcArea(width, height) {
    let calculatedArea = width * height;
    let message = `The total area calculated is ${calculatedArea} ft.`;
    console.log(message);
};
        /* 5 */
calcArea(5,9);



//Function Declaration with Default Parameters
                /*      6       */
function greeting(name = 'my dear fellow') {
    console.log(`Hello ${name}!`);
};

greeting();
greeting('Hamza');



/*---------
~~~| INDEX |~~~
------------ */

// 1. KEYWORD
// 2. IDENTIFIER: When calling the declared function, you simply call the identify with the round brackets. Example: `greet();`
// 3. FUNCTION BODY: The code block with the code executed upon the function's call.
// 4. PARAMETERS: Parameters are declared when the function is declared & indicate that the function can accept input(s) & use those inputs in some way.
// 5. ARGUMENTS: Values or variables are passed into the round brackets of the called function which had parameters declared with it. These arguments follows the order of the parameters that were declared.
// 6. DEFAULT PARAMETER(S): ES6 introduces the ability to set predetermined values for parameters that will be used if an argument is not passed to a called function.