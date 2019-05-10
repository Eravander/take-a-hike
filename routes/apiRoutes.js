var db = require("../models");

module.exports = function(app) {
  // Get all trails
  app.get("/api/trails", function(req, res) {
    db.Hike.findAll({}).then(function(trailInfo) {
      res.render("trail-card", trailInfo);
    });
  });

  // Get all gear
  app.get("/api/gear", function(req, res) {
    db.Gear.findAll({}).then(function(allGear) {
      res.json(allGear);
    });
  });

  // Create a new example
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(newItem) {
      res.redirect("/");
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
