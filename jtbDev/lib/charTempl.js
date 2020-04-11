module.exports = class Character {
    
    constructor(name, hp, ac) {
        this.name = name;
        this.hp = hp,
        this.ac = ac;
        this.inventory = [];
    }

    damage(damageAmount){
        this.hp = this.hp - damageAmount;
    }

    addItem(item){
        this.inventory.push(item);
    }

    inspectInventory(){
        this.inventory.forEach(function(item) {
            item.showInfo();
        })
    }
}