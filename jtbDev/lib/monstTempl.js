module.exports = class Monster {
    
    constructor(name, hp, ac, damage, dmgType) {
        this.name = name;
        this.hp = hp,
        this.ac = ac;
        this.damage = damage;
        this.dmgType = dmgType;
    }

    damage(damageAmount){
        this.hp = this.hp - damageAmount;
    }
}