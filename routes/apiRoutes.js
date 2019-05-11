var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Get all trails
  app.get("/api/trails/", function(req, res) {
    db.Hike.findAll({ limit: 12 }).then(function(trailInfo) {
      res.json(trailInfo);
    });
  });

  app.post("/api/trails/save", function(req, res) {
    db.Usertrails.create(req.body).then(function(trailInfo) {
      res.json(trailInfo);
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

  app.get("/api/user/:id", function(req, res) {
    console.log(req.params.id)
    db.User.findOne({ where: { userId: req.params.id } }).then(function(userInfo) {
      res.json(userInfo);
    });
  });

  app.get("/api/user/:id/mytrails", function(req, res) {
    db.Usertrails.findAll({ where: { userId: req.params.id } }).then(function(userInfo) {
      res.json(userInfo);
    });
  });

  app.get("/api/:email", function(req, res) {
    console.log(req.params.email)
    db.User.findOne({ where: { email: req.params.email } }).then(function(userInfo) {
      res.json(userInfo);
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
