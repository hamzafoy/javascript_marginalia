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



/*-----------------
~~~| RENDERING JSX |~~~
-------------------- */

//Using the ReactDOM library, you access a number of React-specific methods such as `.render()` which takes two arguments.
//You pass `.render()` two arguments - 1st being the JSX expression to be rendered & the 2nd being where the JSX expression will be appended.
//`.render()` creates a corresponding tree of DOM nodes. The 2nd argument acts as a 'container' for the JSX expression in the 1st argument.
//ReactDOM.render() will only update DOM elements that have changed.
//If you render the exact same thing twice, the 2nd render will do nothing - cutting down on inefficiency of DOM updates.

//EXAMPLE:

/*---

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

^ In the above example, the <h1> JSX is going to be rendered inside a container with the id of 'container', the id=container html tag must be found in the accompanying HTML file.

--*/


/*---

const myList = (
  <ul>
    <li>Test 1</li>
    <li>Test 2</li>
    <li>Test 3</li>
    <li>Test 4</li>
  </ul>
);

ReactDOM.render(
  myList,
  document.getElementById('app')
);

^ In the above example, you can pass a variable storing a JSX expression to the 1st argument of `ReactDOM.render()`.

---*/


/*---

const name = 'Hamza Foy';

ReactDOM.render(<h1>{name}</h1>, document.getElementById('app'));

^ In the above example, you can access variables outside of JSX, JavaScript injected into JSX is still in the same environment as the remaining JavaScript.
The first argument to ReactDOM.render() can be a JSX expression with a curly-brace call to an outside JavaScript variable.

---*/


/*---

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  moose: "http://bit.ly/1Upbczi"
}; 
 
const panda = (
  <img 
    src={pics.panda} 
    alt="Kung Fu Panda" />
);
 
const owl = (
  <img 
    src={pics.owl} 
    alt="Sleepy Owl" />
);
 
const moose = (
  <img 
    src={pics.moose} 
    alt="Moose of the Moot" />
); 

^ In the above example, you can find that attributes can be set from object properties (as well as from variables).

---*/



/*-------------------
~~~| Notes about JSX |~~~
---------------------- */

//We are accustomed to `class` being an attribute in HTML, but with JSX, this attribute MUST be listed as `className="example"` as `class` is a reserved word in JS.
//In JSX, all self-closing tags such as `<img/>`, `<input/>`, & `<br/>` MUST include the `/` at the end before the 2nd bracket unlike HTML.
//In JSX, JavaScript can be embedded in JSX in curly braces - ex: <h1>{2 + 3}</h1> will render '5' in the browser.

