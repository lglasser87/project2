// Require Item class since weapon is an extension of items.
const Item = require("./itemTempl");

// Class constructor for the main weapon equipped.
module.exports = class Weapon extends Item {
    constructor(name, descr, toHit, damage, dmgType){
        super(name, descr)
        
        this.toHit = toHit;
        this.damage = damage;
        this.dmgType = dmgType;
    }

    showInfo() {
        console.log(`${this.name} is ${this.descr}. It does ${this.damage} ${this.dmgType} damage`)
    }
}