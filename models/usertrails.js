module.exports = function (sequelize, DataTypes) {
  var Usertrails = sequelize.define("Usertrails", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  },
    {
      timestamps: false
    });

  Usertrails.associate = function (models) {

    Usertrails.belongsTo(models.User,
      {
        foreignKey: {
          allowNull: false
        }
      });
    Usertrails.belongsTo(models.Hike, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Usertrails;
};
