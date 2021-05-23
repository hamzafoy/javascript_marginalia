/*---------------------------------
~~~| What is a REGULAR EXPRESSION? |~~~
------------------------------------ */

//Regular Expressions serve as patterns for searching text.
//RegEx are useful for validating input, extracting specific part(s) of a string, & performing searches and replacing strings (or parts of a string).

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

let exactMatchTest = /Antiquity/; //Exact matches are made by placing the search word between right-leaning slashes (/). This regex is ONLY searching for that specific word.
let howManyExactMatches = exampleString.match(exactMatchTest);
let exactMatchCounter = howManyExactMatches.length;
let optionalMatchTest = /colou?r/g; //Optional matches are made by placing a ? to the right of letters that are optionally included in the search. This regex in the example will match UK & US spellings of color/colour.
let howManyOptionalMatches = exampleString.match(optionalMatchTest)
let optionalMatchCounter = howManyOptionalMatches.length;
let globalModifierTest = /Arabia/g; //Global modifiers ensure that you are finding ALL matches instead of the default where it only finds the FIRST match.
let caseInsensitiveModifierTest = /the/gi; //Case Insensitive modifiers matches what is being tested for including uppercase and lowercase

// console.log(exampleString.match(exactMatchTest)); //EXPECTED OUTPUT includes printing the word that was matched and its index.
/*               1              */
exactMatchTest.test(exampleString) ? console.log(`This RegExp has found ${exactMatchCounter} match(es)`) : console.log(`This RegExp has found no matches.`); //EXPECTED OUTPUT: `This RegExp found a match.`
optionalMatchTest.test(exampleString) ? console.log(`This RegExp has found ${optionalMatchCounter} match(es)`) : console.log(`This RegExp has found no matches.`); //EXPECTED OUTPUT: `This RegExp found a match.`
globalModifierTest.test(exampleString) ? console.log(`This RegExp has found a match`) : console.log(`This RegExp has found no matches.`); //EXPECTED OUTPUT: `This RegExp found a match.`
caseInsensitiveModifierTest.test(exampleString) ? console.log(`This RegExp has found a match`) : console.log(`This RegExp has found no matches.`); //EXPECTED OUTPUT: `This RegExp found a match.`



/*---------
~~~| INDEX |~~~
------------ */

//1. TEST METHOD: `test()` is a method called on a variable storing a regular expression and the argument passed is the variable storing the string to test against the regular expression.