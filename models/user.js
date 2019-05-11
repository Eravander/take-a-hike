module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      userTrail: DataTypes.INTEGER,
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      timestamps: false
    }
  );

  User.associate = function(models) {
    User.hasMany(models.Usertrails, {
      // foreignKey: 'userId'
    });
  };
  return User;
};
