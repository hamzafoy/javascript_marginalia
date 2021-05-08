/*---------------------
~~~| What is an ARRAY? |~~~
------------------------ */

//An array is a list-like data structure which can store any data type including strings, numbers, & booleans.
//Each item stored in an array is referred to as an element.

//Basic Array Literal
/*                   1                  */
const listOfItems = [false, 'Warring States Period', 1.2567, true, 'Gravy', 1012];
const listOfItemsTwo = [undefined, 9.212, 'Tajweed'];
const listOfNums = [2.24015, 39, 57.565, 99.99991];


//Accessing an element in an array with its index. Use 'bracket notation' containing the index after the variable identifier to access said element.
            /*      2     */
console.log(listOfItems[1]); //EXPECTED OUTPUT is 'Warring States Period'.

//Accessing elements in nested arrays. Chain bracket notations to dive deeper into array structures.
const nestedLists = [[1,2], [3,4], [5,6]];
console.log(nestedLists[0][1]); //EXPECTED OUTPUT is 2


//Updating the value of an element inside the array using 'bracket notation'.
listOfItems[1] = 'Spaghetti';
console.log(listOfItems[1]); //EXPECTED OUTPUT is 'Spaghetti'.
//Do note that you can still update elements in an array that is defined to a variable using `const`, you just can't reassign a new array or new value to the `const`.


//Array Properties
                        /* 3 */
console.log(listOfItems.length); //EXPECTED OUTPUT is 6.


//Array Methods
           /*          4          */
listOfItems.push('Rome: Total War'); //Note that `.push()` "mutates" the initial array, changing the array from its initial state.
console.log(listOfItems); //EXPECTED OUTPUT: The array elements will have 'Rome: Total War' at the end.

           /* 5 */
listOfItems.pop();
let poppedItem = listOfItems.pop();
console.log(poppedItem); //EXPECTED OUTPUT is 1012.

           /*  6  */
listOfItems.forEach(
    function(item, index) {
        console.log(item, index); //EXPECTED OUT is each array element's value and index in the array.
    }
);

           /*  7  */
listOfItems.shift();

           /*      8       */
listOfItems.unshift(8.72134);

                          /*         9        */
let position = listOfItems.indexOf('Spaghetti'); //The returned index can be stored in a variable.
console.log(position); //EXPECTED OUTPUT is 1

           /*          10         */
listOfItems.splice(1, 1, 'Lasagna');
console.log(listOfItems); //EXPECTED OUTPUT is [8.72134, 'Lasagna', 1.2567, true, 'Gravy']

                       /*   11    */
console.log(listOfItems.slice(1,3)); //EXPECTED OUTPUT is ['Lasagna', 1.2567]

                                    /*         12        */
const longListOfItems = listOfItems.concat(listOfItemsTwo);
console.log(longListOfItems); //EXPECTED OUTPUT is [8.72134, 'Lasagna', 1.2567, true, 'Gravy', undefined, 9.212, 'Tajweed']

function everyTest(value, index, array) {
    return value < 101;
};
                      /*      13       */
console.log(listOfNums.every(everyTest)); //EXPECTED OUTPUT is true

let filterFilter = value => value > 50;
                                 /*        14        */
let filteredByFilter = listOfNums.filter(filterFilter);
console.log(filteredByFilter); //EXPECTED OUTPUT is [57.565, 99.99991]

                      /*        15       */
console.log(listOfNums.find(filterFilter)); //EXPECTED OUTPUT is 57.565

                           /*        16        */
console.log(longListOfItems.includes('Tajweed')); //EXPECTED OUTPUT is true

                      /*          17          */
console.log([2, 5, 10].map(value => value * 3)); //EXPECTED OUTPUT is [6, 15, 30]

let reducedVinegar = (acc, currentValue) => acc + currentValue;
                       /*          18         */
console.log([3, 12, 21].reduce(reducedVinegar)); //EXPECTED OUTPUT is 36



/*---------
~~~| INDEX |~~~
------------ */

//1. ARRAY LITERAL: An array literal creates an array by wrapping individual 'elements' in square brackets. This can be saved to a variable.
//2. INDEX: The numbered position of an element inside the array. JavaScript arrays are 'zero-indexed' which means the first element has an index of 0.
//3. LENGTH PROPERTY: A built-in property of arrays, `.length` uses dot notation to return the number of elements in a checked array.
//4. PUSH METHOD: A method used with arrays, the `.push()` method is given 1 or more arguments which are elements you want to add to the end of an array.
//5. POP METHOD: The `.pop()` method removes the last element in an array. This removed element, using `.pop()`, can be stored in a variable.
//6. FOREACH METHOD: The `.forEach()` method takes a provided function and executes it once for each array element.
//7. SHIFT METHOD: The `.shift()` method removes the first element in an array.
//8. UNSHIFT METHOD: The `.unshift()` method takes 1 arg which is the value you want to add as an element to the beginning of an array.
//9. INDEXOF METHOD: The `.indexOf()` method takes 1 arg, a value, and returns the first index position of that value found in the array. Will return -1 if the element isn't present.
//10. SPLICE METHOD: The `.splice()` method takes 3 args: the index which the method will mutate, the number of elements to remove from the index in the 1st arg, and the item(s) to add from the 1st arg's index.
//NOTE for SPLICE METHOD: The `.splice()` can take 1 or 2 args only, which will result in removing a number of elements from the array which `.splice()` is applied. Read MDN documents for further detail.
//11. SLICE METHOD: The `.slice()` method can take 1 or 2 args. The 1st arg indicates which index to start slicing and returning a copy of the original array.
//NOTE FOR SLICE METHOD: The 2nd arg indicates where to stop slicing. This method DOES NOT alter the original array that the method is executed on.
//12. CONCAT METHOD: The `.concat()` method takes 1 arg which is the 2nd array that you want to merge with the array the method is called on.
//NOTE FOR CONCAT METHOD: This method doesn't alter the array that `.concat()` is called on nor the array used as an argument. This method creates a 3rd new & merged array.
//13. EVERY METHOD: The `.every()` method returns a Boolean value depending on whether every element of the array passes the test provided by the function passed through the method.
//14. FILTER METHOD: The `.filter()` method CREATES a new array with elements which pass test(s) implemented by the function passed to the `.filter()` method.
//15. FIND METHOD: The `.find()` method returns the FIRST value that passes the test in the function passed to the `.find()` method.
//16. INCLUDES METHOD: The `.includes()` method accepts 1 arg which is a value you want to test whether it is in the array or not. Returns a Boolean value depending on result.
//17. MAP METHOD: The `.map()` method CREATES a new array populated with new elements which would be the results of the function passed to the `.map()` method executed on each element.
//18. REDUCE METHOD: The `.reduce()` method executes functions towards 'reducing' the elements of an array to a single outputted value.
//NOTE FOR FUNCTIONS MUTATING ARRAYS: When arrays are mutated inside a function, the change will be maintained outside the function as well.