module.exports = function(sequelize, DataTypes) {
  var Hike = sequelize.define("Hike", {
    pathType: DataTypes.STRING,
    county: DataTypes.STRING,
    land: DataTypes.STRING,
    watershed: DataTypes.STRING,
    lon: DataTypes.DECIMAL(10, 2),
    lat: DataTypes.DECIMAL(10, 2),
    state: DataTypes.STRING,
    parkCode: DataTypes.STRING,
    quad: DataTypes.STRING,
    district: DataTypes.STRING,
    notes: DataTypes.STRING,
    name: DataTypes.STRING,
    elevation: DataTypes.DECIMAL(10, 2),
    road: DataTypes.STRING,
    trail: DataTypes.STRING,
    trailType: DataTypes.STRING
  });
  return Hike;
};
