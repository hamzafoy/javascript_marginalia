/*-------------------
~~~| What is a LOOP? |~~~
---------------------- */

//Loops are useful in that you can repeat actions with specific start/end criteria.

//FOR Loop
let forLoopArray = [];
let forLoopReversed = [];
let locales = ['Beechmont', 'Buechel', 'Fairdale', 'Prospect'];
let oldStompingGrounds = ['Highlands', 'Buechel', 'Waterfront', 'Clifton'];
/*                 1                  */
for(let count = 2; count <= 6; count++) {
    forLoopArray.push(count);
}
console.log(forLoopArray); //EXPECTED OUTPUT is [2, 3, 4, 5, 6]

for(let i = 3; i >= 0; i--) {
    forLoopReversed.push(i);
}
console.log(forLoopReversed);//EXPECTED OUTPUT is [3, 2, 1, 0]

for(let j = 0; j < locales.length; j++) {
    console.log(locales[j]); //EXPECTED OUTPUT is Beechmont Buechel Fairdale Prospect
}

/*                  2                  */
for(let i = 0; i < locales.length; i++) {
    for(let j = 0; j < oldStompingGrounds.length; j++) {
        if(locales[i] === oldStompingGrounds[j]) {
            console.log(`I know that neighborhood where you used to hang, it was ${oldStompingGrounds[j]} wasn't it?`); //EXPECTED OUTPUT is Buechel
        }
    }
};


//WHILE Loop
/*               3               */
while(forLoopReversed.length > 0) {
    forLoopReversed.pop();
    console.log(forLoopReversed); //EXPECTED OUTPUT is [3, 2, 1] then [3, 2] then [3] then []
}


//DO WHILE Loop
/* 4 */
do {
    forLoopArray.pop();
    console.log(forLoopArray); //EXPECTED OUTPUT is [2, 3, 4, 5] then [2, 3, 4] then [2, 3] then [2], then []
} while (forLoopArray.length > forLoopReversed.length);


//BREAK KEYWORD USAGE
let int = 2;
while(locales.length > 0) {
    locales.pop();
    if(locales.length === int) {
        /* 5 */
        break;
    }
}
console.log(locales); //EXPECTED OUTPUT is ['Beechmont', 'Buechel']



/*---------
~~~| INDEX |~~~
------------ */
//1. FOR LOOPS: These loops usually include an 'iterator' variable. The iterator is initialized, checked against a condition to determine the loop's end, the iterator variable has its value changed on each loop.
//NOTE FOR ITERATOR VARIABLE: Iterator variables can have any name, it is common to see 'i' or 'j' letters used.
//2. NESTED FOR LOOPS: You can nest loops which can enable comparing elements in multiple arrays for example.
//3. WHILE LOOPS: While loops are useful when you want a loop to execute an undetermined numbe of times (provided we avoid infinite loops!).
//4. DO WHILE LOOPS: Do While loops will execute ONCE before even considering the testing condition in the `while()` parentheses.
//5. BREAK KEYWORD: Allows the program to abruptly end the execution and repetition of a loop. The keyword should be placed within the loop's code block.