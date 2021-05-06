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
//Do note that you can still update elements in an array that is defined to a variable using `const`, you just can't reassign a new array or new value to the `const`.


//Array Properties
                        /* 3 */
console.log(listOfItems.length);


//Array Methods
           /*          4          */
listOfItems.push('Rome: Total War'); //Note that `.push()` "mutates" the initial array, changing the array from its initial state.
console.log(listOfItems);



/*---------
~~~| INDEX |~~~
------------ */

//1. ARRAY LITERAL: An array literal creates an array by wrapping individual 'elements' in square brackets. This can be saved to a variable.
//2. INDEX: The numbered position of an element inside the array. JavaScript arrays are 'zero-indexed' which means the first element has an index of 0.
//3. LENGTH PROPERTY: A built-in property of arrays, `.length` uses dot notation to return the number of elements in a checked array.
//4. PUSH METHOD: A method used with arrays, the `.push()` method is given 1 or more arguments which are elements you want to add to the end of an array.