/*---------------------
~~~| What is an ARRAY? |~~~
------------------------ */

//An array is a list-like data structure which can store any data type including strings, numbers, & booleans.
//Each item stored in an array is referred to as an element.

//Basic Array Literal
/*                   1                  */
const listOfItems = [true, 'Gravy', 1012];


//Accessing an element in an array with its index. Use 'bracket notation' containing the index after the variable identifier to access said element.
            /*      2     */
console.log(listOfItems[1]); //Expected Output is 'gravy'


//Updating the value of an element inside the array using 'bracket notation'.
listOfItems[1] = 'Spaghetti';
console.log(listOfItems[1]);



/*---------
~~~| INDEX |~~~
------------ */

//1. ARRAY LITERAL: An array literal creates an array by wrapping individual 'elements' in square brackets. This can be saved to a variable.
//2. INDEX: The numbered position of an element inside the array. JavaScript arrays are 'zero-indexed' which means the first element has an index of 0.