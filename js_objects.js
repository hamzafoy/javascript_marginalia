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
            leader: 'Flavius Iulius Brutus',
            dispatched: false
        },
        secondParty: {
            leader: 'Gnaeus Sulla',
            dispatched: false
        },
        thirdParty: {
            leader: 'Quintus Cincinnatus',
            dispatched: false
        }
    },
    _intellectualProperty: 'Hamza Foy Games LLC',
    /*     2     */
    get pillage() {
        if (this.cavalry && this.infantry) {
            console.log(`Your footmen and horsemen set out to pilfer the countryside.`);
        } else {
            console.log(`You do not have sufficient manpower to engage in this action.`);
        }
    },
    /*          3         */
    set sendScout(boolean) {
        for (let i in army.scouts) {
            if(typeof boolean === "boolean") {
                this.scouts[i].dispatched = boolean;
            } else {
                console.log('Wrong use of this action!');
            }
        }
    }
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
/*            4           */
for (let i in army.scouts) {
    console.log(`Send for the leaders of our scouting party ${army.scouts[i].leader}`)
};

army.buildArtillery();
console.log(army.onagers); //EXPECTED OUTPUT is 25 (onagers).

           /*            5            */
console.log(army._intellectualProperty);

//GETTER & SETTER METHODS allow both access to internal properties and reassignment of the values of said properties. Access both methods with syntax similar to accessing properties.
army.pillage
army.sendScout = true;
console.log(army.scouts); //EXPECTED OUTPUT is the 'dispatched' property of each party of scouts is set to TRUE

/*-------------------------------
~~~| What is a FACTORY FUNCTION? |~~~
---------------------------------- */

//Factory Functions allow for multiple object instances to be produced as a return of the factory function.
//Factory Functions take parameters which allow for custom values to be set to designated keys/properties of the created object.
const armyBarracks = (infantry, cavalry, bowmen, onagers, name, rank) => {
    return {
        infantry, //ES6 NOTE: Destructuring allows for 'property value shorthand'. This line is EQUIVALENT to `infantry: infantry`.
        cavalry,
        bowmen,
        onagers,
        general: {
            name,
            rank
        }
    }
};

const legioferrata = armyBarracks(12000, 1000, 500, 0, 'Marcus Aurelius', 'augustus');
console.log(legioferrata); //EXPECTED OUTPUT is an object { infantry: 12000, cavalry: 1000, bowmen: 500, onagers: 0, general: { name: 'Marcus Aurelius', rank: 'augustus'} }



/*---------
~~~| INDEX |~~~
------------ */

//1. THIS (KEYWORD): The `this` keyword is a useful keyword that allows you to gain access to the other properties found in an object which has
// a method in it that is trying to access that object's own properties. The `this` keyword references the calling object & grants access to the calling object's properties.
// Try to avoid arrow functions with using the `this` keyword.
//2. GETTER METHOD: Getter methods, which are called as if accessing a property, are used to get and return INTERNAL properties of an object the getter is written in.
//3. 
//4. FOR..IN LOOP: For..in loops allow for the iteration through objects and can pull specific data out of objects or nested objects.
//5. UNDERSCORE: The _underscore at the beginning of a property's name is usually used to instruct the developer that the property is NOT meant to be manipulated.