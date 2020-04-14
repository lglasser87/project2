module.exports = function(sequelize, DataTypes) {
    let Item = sequelize.define("Item", {
        name: DataTypes.STRING,
        itemType: DataTypes.STRING,
        Description: DataTypes.STRING,
        // toHit: DataTypes.INTEGER,
        Damage: DataTypes.INTEGER
        // DamageType: DataTypes.STRING
    });

    Item.associate = function(models) {
        // Associating the character with an inventory
        Item.belongsTo(models.Character, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Item;
};