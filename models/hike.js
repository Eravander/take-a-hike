module.exports = function(sequelize, DataTypes) {
  var Hike = sequelize.define(
    "Hike",
    {
      trailId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      pathType: DataTypes.STRING,
      county: DataTypes.STRING,
      land: DataTypes.STRING,
      watershed: DataTypes.STRING,
      lon: DataTypes.DECIMAL,
      lat: DataTypes.DECIMAL,
      state: DataTypes.STRING,
      parkCode: DataTypes.STRING,
      quad: DataTypes.STRING,
      district: DataTypes.STRING,
      notes: DataTypes.STRING,
      trailName: DataTypes.STRING,
      elevation: DataTypes.DECIMAL,
      road: DataTypes.STRING,
      trail: DataTypes.STRING,
      trailType: DataTypes.STRING
    },
    {
      timestamps: false
    }
  );
  Hike.associate = function(models) {
    Hike.hasMany(models.Usertrails, {
      // foreignKey: 'trailId'
    });
  };
  return Hike;
};
