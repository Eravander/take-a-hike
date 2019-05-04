module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    uniqueId: DataTypes.INTEGER,
    trailId: DataTypes.INTEGER,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  return User;
};
