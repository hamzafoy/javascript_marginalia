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
    onagers: 12,
    raiseLevy () { //`.raiseLevy()` is a method of this object.
        army.infantry = army.infantry + 100;
    },
    buildArtillery () {
        /*     1     */
        this.onagers++;
    },
    general: {
        name: 'Scipio Africanus',
        rank: 'imperator'
    },
    scouts: {
        firstParty: {
            leader: 'Flavius Iulius Brutus'
        },
        secondParty: {
            leader: 'Gnaeus Sulla'
        },
        thirdParty: {
            leader: 'Quintus Cincinnatus'
        }
    },
    _intellectualProperty: 'Hamza Foy Games LLC'
};

//You can access an object's properties using 'dot notation'.
console.log(`My army has ${army.infantry} footmen & ${army.bowmen} archers.`); //EXPECTED OUTPUT is 'my army has 10000 footmen & 2000 archers'.

//You can access an object's properties using 'bracket notation. The key inside the bracket MUST be passed as a string.
console.log(`I am moving ${army['onagers']} artillery pieces on the hill overlooking the city's walls.`); //EXPECTED OUTPUT is 'I am moving 12 artillery pieces on the hill overlooking the city's walls'.

//With bracket notation, you can pass a variable inside the brackets to select keys of a given object.
let propReader = (obj, prop) => obj[prop];
console.log(propReader(army, 'cavalry')); //EXPECTED OUTPUT is 200.

//Assigning values to existing properties or assigning new properties. You can use either bracket or dot notation.
//When using bracket notation to assign or mutate properties in an object, you must list the value as a string.
//As in the case of an array, you can mutate the properties (add or change) of an object stored to a `const` variable. You just can't reassign a new object to the `const`.
army.mercenaries = 500;
army['onagers'] = 24;
console.log(army); //EXPECTED OUTPUT is 500 mercenaries added & 24 onagers.
delete army['mercenaries'];
console.log(army); //EXPECTED OUTPUT is `army` object absent any mercenaries.

//Methods are invoked with dot notation with parentheses at the end of the method's name.
//METHODS are the actions that an object has, PROPERTIES are the attributes that an object has.
army.raiseLevy();
console.log(army); //EXPECTED OUTPUT is `army` object with 10100 infantry.

//You can have nested objects which rely on chaining bracket or dot notation to access nested properties and their values.
console.log(`This army is led by general ${army.general['name']}`); //EXPECTED OUTPUT is 'This army is led by general Scipio Africanus'.

//You can use functions to mutate object's properties, but not reassign a new object altogether.
//Objects are passed by reference. The computer interprets the parameter name (variable assigned to an object) as pointing to the space in memory holding the object.
let addElites = obj => {
    obj.retinues = 'Triarii';
};
addElites(army);
console.log(army); //EXPECTED OUTPUT is `army` object printed with a new `retinues` property with the value 'Triarii'.

//You can loop through object elements. Use a for..in loop.
/*            2           */
for (let i in army.scouts) {
    console.log(`Send for the leaders of our scouting party ${army.scouts[i].leader}`)
};

army.buildArtillery();
console.log(army.onagers); //EXPECTED OUTPUT is 25 (onagers).

           /*            3            */
console.log(army._intellectualProperty);



/*---------
~~~| INDEX |~~~
------------ */

//1. THIS (KEYWORD): The `this` keyword is a useful keyword that allows you to gain access to the other properties found in an object which has
// a method in it that is trying to access that object's own properties. The `this` keyword references the calling object & grants access to the calling object's properties.
// Try to avoid arrow functions with using the `this` keyword.
//2. FOR..IN LOOP: For..in loops allow for the iteration through objects and can pull specific data out of objects or nested objects.
//3. UNDERSCORE: The _underscore at the beginning of a property's name is usually used to instruct the developer that the property is NOT meant to be manipulated.