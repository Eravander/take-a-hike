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

  // User.associate = function(models) {
  //   // Associating User with Posts
  //   // When an User is deleted, also delete any associated Posts
  //   User.hasMany(models.Complete, {
  //     onDelete: "cascade"
  //   });
  // };

  return User;
};
