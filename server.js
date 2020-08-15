//Express Requirement
const express = require("express");
const PORT = process.env.PORT || 6969;
const app = express();

//More Functionality
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HANDLEBARS
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routing Import
const routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Testing Connection
app.listen(PORT, function () {
  console.log("App now listening at localhost:" + PORT);
});
