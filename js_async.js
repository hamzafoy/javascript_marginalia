/*------------------------------------
~~~| What is ASYNCHRONOUS JAVASCRIPT? |~~~
--------------------------------------- */

//Asynchronous JavaScript includes any operations in JS that allows the machine to continue executing code whilst waiting for the async task(s) to finish.
//This is particularly important in that it means that the machine or browser DOES NOT have to 'freeze' while waiting for async operations to complete.

//JavaScript introduced `Promise` in ES6 - these are objects that have 1 of 3 states related to fulfillment of an async operation:
//1. PENDING: Initial state with no completion of async, 2. FULFILLED: Async operation has completed successfully and the Promise has a 'resolved value', 3. REJECTED: Async operation failed usually with an `Error` object.

const execution = (resolve, reject) => {
    let word = 'word'
    if (word === 'word') {
        resolve('This resolved!');
    } else {
        reject('This rejected!');
    }
}
const thePromise = new Promise(execution);

console.log(thePromise);