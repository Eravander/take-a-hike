var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index");
  });

  // list all the users? do we even want this?
  app.get("/user", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
      res.render("user", allUsers)
    });
  });

  // pass in any specific ID of a user and display the info for that user
  app.get("/user/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(userInfo) {
      res.render("user", userInfo);
    });
  });

  // trails route will display trails
  app.get("/trails", function(req, res) {
    db.Hike.findAll({}).then(function(trailInfo) {
      res.render("trail-card", trailInfo)
    });
  });

  // gear route will show all of the gear and where it was used
  app.get("/gear", function(req, res) {
    db.Gear.findAll({}).then(function(gearInfo) {
      res.render("gear", gearInfo)
    });
  });

  // this route will let you look at specific gear items by searching their ID
  app.get("/gear/:id", function(req, res) {
    db.Gear.findOne({ where: {id: req.params.id } }).then(function(gearItem) {
      res.render("gear", gearItem);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
