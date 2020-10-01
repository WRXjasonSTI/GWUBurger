var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//routes

router.get("/", function (req, res) {
  burger.select(function (data) {
    var hbsObject = {
      burgers: data,
    };
    res.render("index", hbsObject);
  });
});

//post new burger
router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      //send back the ID of the new burger
      res.json({ id: result.insertId });
    }
  );
});

//update status
router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
