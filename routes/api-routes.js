const db = require("../models");
//const Router = require("express").Router();

module.exports = function(router) {
  // router.post("/api/login", authenticate("local"), (req, res) => {
  //   // Sending back a password, even a hashed password, isn't a good idea
  //   res.json({
  //     email: req.user.email,
  //     id: req.user.id
  //   });
  // });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/api/user", (req, res) => {
    db.User.create({
      email: req.body.email,
      Password: req.body.Password
    })
      .then(user => {
        res.json(user);
        console.log(user);
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
