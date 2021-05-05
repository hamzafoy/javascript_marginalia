/*-----------------------------------
~~~| What is a FUNCTION DECLARATION? |~~~
-------------------------------------- */

//Basic Function Declaration
//Please note, the function declaration is hoisted. A function declaration can be called in lines BEFORE its declaration.
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


//Function Demonstrating the Return Statement

function rectangularArea(width, height) {
    if (width < 0 || height < 0) {
        /* 7 */
        return console.log('You must provide positive integers to calculate the area of the rectangle');
    }
    let area = width * height;
    return console.log(area);
}

rectangularArea(5,13);
rectangularArea(-2,21);


//Helper Functions - Example: Calculating Fahrenheit Temperatures to Kelvin

function farToKelvOne(num) {
    let calc = (num - 32) * 5 / 9;
    return calc;
};

function farToKelvTwo(fahrenheit) {
    return farToKelvOne(fahrenheit) + 273.15;
}

/*             8            */
console.log(farToKelvTwo(78));



/*----------------------------------
~~~| What is a FUNCTION EXPRESSION? |~~~
------------------------------------- */

//Basic Function Expression
//Please note, the function expression is NOT hoisted. A function expression cannot be called in lines BEFORE it is defined.
/*                      9                         */
const calcVolume = function(length, width, height) {
    const volume = length * width * height;
    return volume;
}


//Arrow Functions
/*                     10                         */
const arrowCalcVolume = (length, width, height) => {
    const volume = length * width * height;
    return volume;
}


//Concise Body Arrow Function




/*---------
~~~| INDEX |~~~
------------ */

// 1. KEYWORD
// 2. IDENTIFIER: When calling the declared function, you simply call the identify with the round brackets. Example: `greet();`
// 3. FUNCTION BODY: The code block with the code executed upon the function's call.
// 4. PARAMETERS: Parameters are declared when the function is declared & indicate that the function can accept input(s) & use those inputs in some way.
// 5. ARGUMENTS: Values or variables are passed into the round brackets of the called function which had parameters declared with it. These arguments follows the order of the parameters that were declared.
// 6. DEFAULT PARAMETER(S): ES6 introduces the ability to set predetermined values for parameters that will be used if an argument is not passed to a called function.
// 7. RETURN STATEMENT: The return statement ensures a function produces an output. Upon the use of a return statement, the execution of the rest of the function is stopped and the code that follows is not executed.
// 8. HELPER FUNCTIONS: The use of return value of a function inside another function allow for tasks to be broken up, easier to read & debug, and are known as helper functions.
// 9. FUNCTION EXPRESSION: A function expression is usually stored in a variable to be referred to in codebase. Function expressions usually contain no name after the function keyword.
// 10. ARROW FUNCTIONS: ES6 introduced 'arrow function syntax' allowing a shorthand to write anonymous functions.