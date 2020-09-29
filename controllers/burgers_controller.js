const express = require("express");
const burgers = require("../models/burger.js");

const router = express.Router();

//get all the burgers
router.get("/", (req, res) => {
    //putting in the callback function
    //"data" will be the response from the db call, handled in the orm.js
    burgers.getAllBurgers((data) => {
        //this object is sent to handlebars to tell it what to render
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        //here's where you tell it what handlebars file to send the data to
        //had to store it in an object, cuz that' how hb likes data
        res.render("index", hbsObject);
    });
});

//the data for the new burger is stored in req.body
router.post("/api/burgers", (req, res) => {
    burgers.creatNewBurger(req.body.burger_name, (result) => {
        //I THINK insertId is built into it, to show the id of the last post
        res.json({ id: result.insertId });
    });
});

//this is used to update the data
//in this case, it'll only be used for eating burgers
router.put("/api/burgers/:id", (req, res) => {
    burgers.devourBurger(req.params.id, (result) => {
        //changedRows is built into it
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
    });
});

//used by server.js
module.exports = router;