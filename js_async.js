/*------------------------------------
~~~| What is ASYNCHRONOUS JAVASCRIPT? |~~~
--------------------------------------- */

//Asynchronous JavaScript includes any operations in JS that allows the machine to continue executing code whilst waiting for the async task(s) to finish.
//This is particularly important in that it means that the machine or browser DOES NOT have to 'freeze' while waiting for async operations to complete.

//JavaScript introduced `Promise` in ES6 - these are objects that have 1 of 3 states related to fulfillment of an async operation:
//1. PENDING: Initial state with no completion of async, 2. FULFILLED: Async operation has completed successfully and the Promise has a 'resolved value', 3. REJECTED: Async operation failed usually with an `Error` object.
    
const thePromise = () => {
    return new Promise((resolve, reject) => {
    let word = 'word'
    if (word === 'word') {
        resolve('This resolved!');
    } else {
        reject('This rejected!');
    }
});
};

const success = (resolvedValue) => {
    console.log(resolvedValue);
}

const doublySuccessful = (secondResolvedValue) => {
    console.log(`This was doubly successful!`);
}

const failure = (reasonForRejection) => {
    console.log(reasonForRejection);
}

thePromise()
    .then(success) //EXPECTED OUTPUT is strictly 'This resolved', not a Promise object encased in curly brackets.
    .then(doublySuccessful) //EXPECTED OUTPUT is 'This was doubly successful!'
    .catch(failure); //EXPECTED OUTPUT is strictly 'This rejected', not a Promise object encased in curly brackets.

//`new` keyword followed by `Promise` constructor method. The `Promise` constructor takes a function parameter which will run the async task and dictate how the promise should be settled.
//`resolve` & `reject` have to do with the Promise being changed from its starting 'pending' state to either 'fulfilled' or 'rejected'.
//You can chain `.then()` to handle the logic for what is to happen when promises settle successfully, use `.catch()` to handle a failed promise.
//You can chain multiple `.then()` in which case you need to NOT nest them inside one another and you should be returning a promise inside the `.then()` methods.
//Use `Promise.all()` allows multiple async operations to happen concurrently - if every single Promise resolves, an array will be returned containing the resolve value of each promise in the array.
//If any promise fails in `Promise.all()`, expect the reason for that one promise rejecting.



/*---------------------------------
~~~| NATIVE PROMISE vs ASYNC/AWAIT |~~~
------------------------------------ */

function nativePromiseVersion() {
    returnFirstPromise()
        .then((firstValue) => {
            console.log(firstValue);
            return returnsSecondPromise(firstValue);
        })
        .then((secondValue) => {
            console.log(secondValue);
        })
}

//The above is native Promise syntax.
//returnFirstPromise() & returnsSecondPromise() return promises.
//returnFirstPromise is invoked & the first chained `.then()` ensures that the first promise is resolved.
//In the callback of the first `.then()`, the resolved value in `firstValue` is returned within the 2nd function and the returned promise is logged in the second `.then()`.

async function asyncAwaitVersion() {
    let firstValue = await returnsFirstPromise();
    console.log(firstValue);
    let secondValue = await returnsSecondPromise(firstValue);
    console.log(secondValue);
}

//Async/Await syntax proves useful in that you can store and refer to resolved values from promises throughout the chain of the asynchronous function. The syntax also looks more similar to typical synchronous JS.
//The ASYNC keyword will always go before a function when one expects a Promise to be returned.
//The AWAIT keyword can only be used inside a function with the keyword ASYNC. The AWAIT keyword makes the function execution wait until the promise settles & returns its result.
//The AWAIT keyword's suspension of function execution does not cost any CPU resources.