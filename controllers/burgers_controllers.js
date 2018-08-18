var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      res.render("index", hbsObject);
    });
  });

router.put("/burgers/devour/:id", function(req, res) {
    var condition = "id = " + req.params.id;
        burger.updateOne({
          devoured: 1
        }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
        });
    });
  
  router.post("/burgers/add", function(req, res) {
    
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

module.exports = router;