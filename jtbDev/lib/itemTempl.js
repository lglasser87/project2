// Class constructor for the main weapon equipped.
module.exports = class {
    constructor(name, descr){
        this.name = name;
        this.descr = descr;
    }

    showInfo() {
        console.log(`${this.name} is ${this.descr}`)
    }
}