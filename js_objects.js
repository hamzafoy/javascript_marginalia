/*----------------------
~~~| What is an OBJECT? |~~~
------------------------- */

//An object can be assigned to a variable. Whereas square brackets [] are used for 'array literals', curly brackets {} are used for objects.
//Objects can be filled with data and will be organized as key-value pairs. Keys & their corresponding values are separated by a colon mark.
//Keys are strings, but objects allow the omission of the quotation marks if no special characters exist in the key.

/* OBJECT */
let army = {
    /* KEY */  /* Value */
    infantry: 10000, //`infantry`, `cavalry`, `bowmen`, & `onagers` are all properties of this object.
    cavalry: 200,
    bowmen: 2000,
    onagers: 12
};

//You can access an object's properties using 'dot notation'.
console.log(`My army has ${army.infantry} footmen & ${army.bowmen} archers.`); //EXPECTED OUTPUT is 'my army has 10000 footmen & 2000 archers'.

//You can access an object's properties using 'bracket notation. The key inside the bracket MUST be passed as a string.
console.log(`I am moving ${army['onagers']} artillery pieces on the hill overlooking the city's walls.`); //EXPECTED OUTPUT is 'I am moving 12 artillery pieces on the hill overlooking the city's walls'.

//With bracket notation, you can pass a variable inside the brackets to select keys of a given object.
let propReader = (obj, prop) => obj[prop];
console.log(propReader(army, 'cavalry')); //EXPECTED OUTPUT is 200.

//Assigning values to existing properties or assigning new properties. You can use either bracket or dot notation.
army.mercenaries = 500;
army['onagers'] = 24;
console.log(army); //EXPECTED OUTPUT is 500 mercenaries added & 24 onagers.
delete army['mercenaries'];
console.log(army); //EXPECTED OUTPUT is army object absent any mercenaries.



/*---------
~~~| INDEX |~~~
------------ */