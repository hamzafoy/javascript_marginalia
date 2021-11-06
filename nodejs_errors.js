const testError = new TypeError("This is a test error!")
console.log(testError.name);
console.log(testError.message);
console.log(testError.stack);

/*---

Error objects contain properties such as `name` which indicates
which kind of error (TypeError, ReferenceError, SyntaxError, etc),
`message` which can be custom-made as a string passed to the Error
object, & `stack` which points to where in the code the Error is
created.

---*/



function square(num) {

    if (typeof num !== 'number') {
      throw new TypeError(`Expected number but got: ${typeof num}`);
    }
  
    return num * num;

}

try {
    square('12')
} catch (err) {
    console.log(err.message);
}

try {
    console.log(square(12))
} catch (err) {
    console.log(err.message);
}

/*---

A common way to handle errors is by `throw`ing errors to have them
become exceptions which ca be caught somewhere in the stack with a
`try/catch` block. If the error is not caught, it becomes an
`uncaughtException` which causes the app to exit.

---*/