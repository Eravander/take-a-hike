var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Get all trails
  app.get("/api/trails/", function(req, res) {
    db.Hike.findAll({}).then(function(trailInfo) {
      res.render("trail-card", trailInfo);
      // res.json(trailInfo);
    });
  });

  // Get all gear
  app.get("/api/gear", function(req, res) {
    db.Gear.findAll({}).then(function(allGear) {
      res.json(allGear);
    });
  });

  // Create a new user
  app.post("/api/user", function(req, res) {
    console.log(req.body)
    db.User.create({
      email: req.body.email
    }).then(function() {
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
