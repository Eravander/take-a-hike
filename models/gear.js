module.exports = function(sequelize, DataTypes) {
  var Gear = sequelize.define("Gear", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    trailId: DataTypes.INTEGER,
    uniqueId: DataTypes.INTEGER,
    comment: DataTypes.STRING
  });
  return Gear;
};
