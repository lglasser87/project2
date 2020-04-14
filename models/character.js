module.exports = function(sequelize, DataTypes) {
    let Character = sequelize.define("Character", {
        name: DataTypes.STRING,
        hp: DataTypes.INTEGER,
        ac: DataTypes.INTEGER,
        tohit: DataTypes.INTEGER,
        damage: DataTypes.INTEGER
    });

    // Character.associate = function(models) {
    //     // Associating the character with an inventory
    //     Character.hasMany(models.Item, {
    //         onDelete: "cascade"
    //     });
    return Character;
    };
