module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: DataTypes.STRING,
    uniqueId: DataTypes.INTEGER
  });
  return Login;
};
