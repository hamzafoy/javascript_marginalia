/*--------------------
~~~| What is a CLASS? |~~~
----------------------- */

//Classes are a type of syntax used to create objects. The idea behind classes is that certain objects you may be expected to create have similar properties & methods.
//Classes allow you to specify the shared properties and methods of objects produced with said class & then you can 'extend' the class for objects that have the shared
//properties/methods in addition to unique properties/methods. Objects created based on a class is known as an 'instance of the class'.

class Levy {
    /*                      1                      */
    constructor(infantry, cavalry, bowmen, onagers) {
        this.infantry = infantry;
        this.cavalry = cavalry;
        this.bowmen = bowmen;
        this.onagers = onagers;
    }
    get roster() {
        console.log(`This levy is a force of ${this.infantry} footmen, ${this.cavalry} riders, ${this.bowmen} archers, & ${this.onagers} pieces of artillery.`)
    }
};

const garrisonTarentum = new Levy(17500, 500, 1250, 0);
console.log(garrisonTarentum); //EXPECTED OUTPUT is Levy { infantry: 17500, cavalry: 500, bowmen: 1250, onagers: 0 }
garrisonTarentum.roster; //EXPECTED OUTPUT is 'This levy is a force of 17500 footmen, 500 riders, 1250 archers, & 0 pieces of artillery.'



/*---------
~~~| INDEX |~~~
------------ */