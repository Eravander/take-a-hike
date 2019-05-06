var db = require("../models");

module.exports = function(app) {
  // Get all trails
  app.get("/api/trails", function(req, res) {
    db.Hike.findAll({}).then(function(trail) {
      res.json(trail);
    });
  });

  // Get all gear
  app.get("/api/gear", function(req, res) {
    db.Gear.findAll({}).then(function(allGear) {
      res.json(allGear);
    });
  });

  // Create a new example
  app.post("/api/gear", function(req, res) {
    db.Gear.create(req.body).then(function(newItem) {
      res.json(newItem);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
