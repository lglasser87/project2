module.exports = function(sequelize, DataTypes) {
    let Monster = sequelize.define("Monster", {
        name: DataTypes.STRING,
        HP: DataTypes.INTEGER,
        AC: DataTypes.INTEGER,
        Damage: DataTypes.INTEGER
    });

    return Monster;
};