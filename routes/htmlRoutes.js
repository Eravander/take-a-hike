var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // list all the users? do we even want this?
  app.get("/user", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/data/land.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/data/login.html"));
  });

  app.get("/createaccount", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/data/createaccount.html"));
  });

  // pass in any specific ID of a user and display the info for that user
  app.get("/user/:id", function(req, res) {
    // db.User.findOne({ where: { userId: req.params.id } }).then(function(userInfo) {
    //   res.json(userInfo);
    // });
    res.sendFile(path.join(__dirname, "../public/data/bio.html"));
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
      res.render("gear", gearInfo);
    });
  });

  // this route will let you look at specific gear items by searching their ID
  app.get("/gear/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Gear.findOne({ where: {id: req.params.id } }).then(function(gearItem) {
      res.render("gear", {
        gear: gearItem
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
