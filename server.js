// Requiring necessary npm packages
require("rootpath")();
const express = require("express");
const exphbs = require("express-handlebars");
// Requiring passport as we've configured it
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./config/_middleware/error-handler");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api route
app.use("/users", require("./config/users/users.controller"));

// global error handler
app.use(errorHandler);

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// start server
const port =
  process.env.NODE_ENV === "production" ? process.env.PORT || 80 : 4000;
app.listen(port, () => console.log("Server listening on port " + port));
