/*--------------------
~~~| What is a CLASS? |~~~
----------------------- */

//Classes are a type of syntax used to create objects. The idea behind classes is that certain objects you may be expected to create have similar properties & methods.
//Classes allow you to specify the shared properties and methods of objects produced with said class & then you can 'extend' the class for objects that have the shared
//properties/methods in addition to unique properties/methods. Objects created based on a class is known as an 'instance of the class'.

class Army {
    constructor(infantry, cavalry, bowmen, onagers) {
        this.infantry = infantry;
        this.cavalry = cavalry;
        this.bowmen = bowmen;
        this.onagers = onagers;
    }
};

const legioapollonaris = new Army(17500, 500, 1250, 0);
console.log(legioapollonaris);



/*---------
~~~| INDEX |~~~
------------ */