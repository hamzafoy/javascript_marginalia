/*------------------
~~~| What is REACT? |~~~
--------------------- */

//React is a JavaScript library that helps with building user interfaces. This library breaks the web app up into components making for easier readability and editing.



/*----------------------
~~~| How does JSX work? |~~~
------------------------- */

//A basic unit of JSX is called a JSX element. JSX elements look exactly like HTML, the only difference is that you would find it in a JavaScript file.
//JSX is a syntax extension for JavaScript, written to be used with React. When a JS file contains JSX code, that file will have to be compiled.
//A JSX compilar will translate any JSX into regular JS before reaching the web browser.
//JSX elements are treated as JS expressions - hence JSX can be stored in a variable, array, or object & passed to a function.
//JSX elements can have attributes, can be nested, but. . .
//A JSX expression MUST have exactly ONE outermost element.

//EXAMPLES:

//   <p>This is a paragraph</p>

//   const nav = <nav>This is a navigation bar</nav>

//   const imgGrande = <img src="img/big.svg" alt="Giant" width="500px" height="500px"/>

/*---

const anchorGoogle = (
    <a href="https://www.google.com">
        <h1>
            Click me!
        </h1>
    </a>
);

NOTE: JSX elements that take up more than one line should be wrapped in parentheses.

---*/

/*---

const anchorGoogle = (
    <a href="https://www.google.com">
        <h1>
            Click me!
        </h1>
    </a>
);
^ THIS WORKS

const failure = (
    <p>This is a</p>
    <p?FAILURE!</p>
)
^ THIS DOES NOT WORK

The first opening tag & final closing tag of a JSX expression MUST belong to the SAME JSX element. An easy fix is to enclose the above failed example in a <div></div> tag.

---*/

/*---

    const myTeam = {
        center: <li>Joel Embiid</li>,
        powerForward: <li>LeBron James</li>,
        smallForward: <li>Kevin Durant</li>,
        shootingGuard: <li>Klay Thompson</li>,
        pointGuard: <li>Chris Paul</li>
    }

---*/