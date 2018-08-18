var express = require('express');   //should i not require express here? should i require the server instead? or export module.exports=function(app) & require it here?
var router = express.Router();
var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

router.put("/burgers/devour/:id", function(req, res) {
    var condition = "id = " + req.params.id;
        console.log("condition", condition);

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

// router.put("/api/cats/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     cat.update({
//       sleepy: req.body.sleepy
//     }, condition, function(result) {
//       if (result.changedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });

// router.post("/burgers/add", function(req, res) {
//     console.log("req: " + req);
//     var newBurger = req.body;
//     console.log("req body controller file: " + json.req);
//     console.log("new burger: " + newBurger);
//     console.log("new burger dot name: " + newBurger.name);
//     burger.insertOne(newBurger.name, function(result){
//         res.redirect("/");
//     });
//   });
  
  router.post("/burgers/add", function(req, res) {
    
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });

module.exports = router;