const express = require("express");
const router = express.Router();
const Price = require("../models/PricesModel");
var cors = require('cors');
const bodyParser = require('body-parser');
router.use(cors());
router.use(bodyParser.json());
router.post("/", (req, response) => {
    Price.findOneAndUpdate({}, 
    {
        overstay: req.body.overstay,
        walkIn: req.body.walkIn,
        noShow: req.body.noShow,
        hourly: req.body.hourly
    },
    function(err, prices) {
      if (err) {
        response.status(404).send(err);
      } else {
        response.json(prices);
      }
    });
  });
  router.get("/", (req, response) => {
    Price.find({}, function(err, reservation) {
        if (err) {
          response.status(404).send(err);
        } else {
          response.json(reservation);
        }
      });
  });

module.exports = router;