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
    /*       2        */
    static raiseLevy() {
        return new this(1000, 500, 500, 0);
    }
};

           /* 3 */
class Army extends Levy {
    constructor(infantry, cavalry, bowmen, onagers, name, rank) {
        /*                  4                   */
        super(infantry, cavalry, bowmen, onagers);
        this.general = {
            name,
            rank
        }
    }
}

const garrisonTarentum = new Levy(17500, 500, 1250, 0);
console.log(garrisonTarentum); //EXPECTED OUTPUT is Levy { infantry: 17500, cavalry: 500, bowmen: 1250, onagers: 0 }
garrisonTarentum.roster; //EXPECTED OUTPUT is 'This levy is a force of 17500 footmen, 500 riders, 1250 archers, & 0 pieces of artillery.'
const legioapollonaris = new Army(22345, 250, 2500, 6, 'Lucius Annaeus Seneca', 'centurion');
console.log(legioapollonaris); //EXPECTED OUTPUT is Army { infantry: 22345, cavalry: 250, bowmen: 2500, onagers: 6, general: { name: 'Lucius Annaeus Seneca', rank: 'centurion' } }
console.log(Levy.raiseLevy());




/*---------
~~~| INDEX |~~~
------------ */

//1. CONSTRUCTOR METHOD: The `constructor()` method takes a range of parameters that will be used to create the key-value pairs of objects created using the class the constructor belongs to.
//2. STATIC METHOD: Static methods belong to a class itself, not to created instances or objects that may have been manufactured through that class.
//3. EXTENDS KEYWORD: The `extends` keyword instructs a class to 'inherit' the properties/methods of a parent class. The class name to the left of `extends` is the child, the class name on right is parent.
//4. SUPER METHOD: The `super()` method takes parameters which are the parameters that are expected to be the same inputs that both parent and child class would receive.