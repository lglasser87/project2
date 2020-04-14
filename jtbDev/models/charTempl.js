module.exports = function(sequelize, DataTypes) {
    let Character = sequelize.define("Character", {
        name: DataTypes.STRING,
        HP: DataTypes.INTEGER,
        AC: DataTypes.INTEGER
    });

    Character.associate = function(models) {
        // Associating the character with an inventory
        Character.hasMany(models.Items, {
            onDelete: "cascade"
        });
    };

    return Character;
};