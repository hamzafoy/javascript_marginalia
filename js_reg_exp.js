/*---------------------------------
~~~| What is a REGULAR EXPRESSION? |~~~
------------------------------------ */

//Regular Expressions serve as patterns for searching text.
//RegExp are useful for validating input, extracting specific part(s) of a string, & performing searches and replacing strings (or parts of a string).

//There are two ways to create a regular expression:
// 1. LITERALS: `let expression = /any regular expression goes here/;
// 2. CONSTRUCTOR METHOD: `let expression = new RegExp('any regular expression goes here');
//It is important to note that the constructor method will be useful for passing a regular expression to the variable, useful for expressions generated dynamically or via APIs.



/*------------------------------
~~~| BASIC MATCHING with RegExp |~~~
--------------------------------- */

//EXAMPLE STRING
let exampleString = `The color of frankincense ranges from gray to gold and the colour of the scent given off by its smoke is usually a light grey. 
Frankincense has always been a luxury commodity even in the times of Antiquity, usually originating from lands such as Arabia Felix.
Arabia Felix is modern day southern Yemen, noted for having arable land unlike most of the Arabian Peninsula.`

let exactMatchTest = /Antiquity/;

exactMatchTest.test(exampleString) ? console.log(`This RegExp has matched`) : console.log(`This RegExp has no matches.`); //EXPECTED OUTPUT: `This RegExp has matched.`