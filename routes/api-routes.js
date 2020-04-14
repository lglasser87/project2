// Requiring our models and passport as we've configured it
var db = require("../models");
// var passport = require("../config/passport");

module.exports = function(app) {
  app.get("/api/characters", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Character.findAll({
      // include: [db.Item]
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });

  app.get("/api/characters/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Character.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Item]
    }).then(function(dbCharacter) {
      res.json(dbCharacter);
    });
  });

  // app.post("/api/characters", function(req, res) {
  //   db.Character.create(req.body).then(function(dbCharacter) {
  //     res.json(dbCharacter);
  //   });
  // });

  // app.delete("/api/characters/:id", function(req, res) {
  //   db.Character.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbCharacter) {
  //     res.json(dbCharacter);
  //   });
  // });


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  // app.post("/api/signup", function(req, res) {
  //   db.User.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   })
  //     .then(function() {
  //       res.redirect(307, "/api/login");
  //     })
  //     .catch(function(err) {
  //       res.status(401).json(err);
  //     });
  // });

  // // Route for logging user out
  // app.get("/logout", function(req, res) {
  //   req.logout();
  //   res.redirect("/");
  // });

  // Route for getting some data about our user to be used client side
  // app.get("/api/user_data", function(req, res) {
  //   if (!req.user) {
  //     // The user is not logged in, send back an empty object
  //     res.json({});
  //   } else {
  //     // Otherwise send back the user's email and id
  //     // Sending back a password, even a hashed password, isn't a good idea
  //     res.json({
  //       email: req.user.email,
  //       id: req.user.id
  //     });
  //   }
  // });
};
