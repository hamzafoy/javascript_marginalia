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
Such frankincense has always been a luxury commodity even in the times of Antiquity, usually originating from lands such as Arabia Felix.
Arabia Felix is modern day southern Yemen, noted for having arable land unlike most of the Arabian Peninsula. This region is covered by 91% sand and 9% arable soil.`

let exactMatchTest = /Antiquity/; //Exact matches are made by placing the search word between right-leaning slashes (/). This regex is ONLY searching for that specific word.
let howManyExactMatches = exampleString.match(exactMatchTest);
let exactMatchCounter = howManyExactMatches.length;
let optionalMatchTest = /colou?r/g; //Optional matches are made by placing a ? to the right of letters that are optionally included in the search. This regex in the example will match UK & US spellings of color/colour.
let howManyOptionalMatches = exampleString.match(optionalMatchTest)
let optionalMatchCounter = howManyOptionalMatches.length;
let globalModifierTest = /Arabia[^a-z]/g; //Global modifiers ensure that you are finding ALL matches instead of the default where it only finds the FIRST match.
let howManyGlobalMatches = exampleString.match(globalModifierTest);
let globalModifierCounter = howManyGlobalMatches.length;
let caseInsensitiveModifierTest = /such/gi; //Case Insensitive modifiers matches what is being tested for including uppercase and lowercase.
let howManyCaseInsensitiveMatches = exampleString.match(caseInsensitiveModifierTest);
let caseInsensitiveCounter = howManyCaseInsensitiveMatches.length;
let numericalMatchTest = /\d\d/; //You use `\d` to match any NUMERICAL digit.
let howManyNumericalMatches = exampleString.match(numericalMatchTest);
let numericalMatchCounter = howManyNumericalMatches.length;
let dotWildcardMatchTest = /..%/g; //You use . wildcard to match ANY CHARACTER including spaces, but not new-lines. This example in particular will match both `91%` & ` 1%`.
let howManyDotWildcardMatches = exampleString.match(dotWildcardMatchTest);
let dotWildcardCounter = howManyDotWildcardMatches.length;

// console.log(exampleString.match(exactMatchTest)); //EXPECTED OUTPUT includes printing the word that was matched and its index.
/*               1              */
exactMatchTest.test(exampleString) ? console.log(`This regex for exact matches has found ${exactMatchCounter} match(es)`) : console.log(`This regex has found no matches.`); //EXPECTED OUTPUT: `This regex found 1 match.`
optionalMatchTest.test(exampleString) ? console.log(`This regex for optional matches has found ${optionalMatchCounter} match(es)`) : console.log(`This regex has found no matches.`); //EXPECTED OUTPUT: `This regex found 2 matches.`
globalModifierTest.test(exampleString) ? console.log(`This regex for global modifiers has found ${globalModifierCounter} match(es)`) : console.log(`This regex has found no matches.`); //EXPECTED OUTPUT: `This regex found 2 matches.`
caseInsensitiveModifierTest.test(exampleString) ? console.log(`This regex for case insensitivity has found ${caseInsensitiveCounter} match(es)`) : console.log(`This regex has found no matches.`); //EXPECTED OUTPUT: `This regex found 2 matches.`
numericalMatchTest.test(exampleString) ? console.log(`This regex for numerical matches has found ${numericalMatchCounter} match(es)`) : console.log(`This regex has found no matches.`); //EXPECTED OUTPUT: `This regex found 1 match.`
dotWildcardMatchTest.test(exampleString) ? console.log(`This regex for dot wildcards has found ${dotWildcardCounter} match(es)`) : console.log(`This regex has found no matches`); //EXPECTED OUTPUT: `This regex found 2 matches`.



/*---------
~~~| INDEX |~~~
------------ */

//Regular Expression Matching
// A. "/honou?r/" - The ? instructs the regex that "u" is optional as it conducts its search against a string.
// B. "\d" & "\D" - The \d matches any numerical digit. The \D matches anything that is NOT a numerical digit.
// C. "\w" & "\W" - The \w matches all characters that include a-z, A-Z, & 0-9. The \W matches any other characters such as punctuation, %, and empty spaces for example.
// D. "\d" - The \d matches whitespace.
//1. TEST METHOD: `test()` is a method called on a variable storing a regular expression and the argument passed is the variable storing the string to test against the regular expression.