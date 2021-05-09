/*----------------------
~~~| What is an OBJECT? |~~~
------------------------- */

//An object can be assigned to a variable. Whereas square brackets [] are used for 'array literals', curly brackets {} are used for objects.
//Objects can be filled with data and will be organized as key-value pairs. Keys & their corresponding values are separated by a colon mark.
//Keys are strings, but objects allow the omission of the quotation marks if no special characters exist in the key.

/* OBJECT */
let army = {
    /* KEY */  /* Value */
    infantry: '10000', //`infantry`, `cavalry`, `bowmen`, & `onagers` are all properties of this object.
    cavalry: '200',
    bowmen: '2000',
    onagers: '12'
}

//You can access an object's properties using 'dot notation'.
console.log(`My army has ${army.infantry} footmen & ${army.bowmen} archers.`);



/*---------
~~~| INDEX |~~~
------------ */