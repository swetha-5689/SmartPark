const express = require("express"); //Express is used for the back end modules

const router = express.Router();

const Spot = require("../../models/Spot"); //import the Spot model

var cors = require("cors"); //make pages accessible

router.use(cors());

router.get("/spots", (req, res) => {
  //HTTP request to get the list of spots in the database
  Spot.find()
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.post("/addSpot", (req, res) => {
  //Add spots with its attributes
  const newSpot = new Spot({
    spotNumber: Number(req.body.spotNumber),
    floorNumber: Number(req.body.floorNumber),
    isVacant: Boolean(req.body.isVacant),
    isReserved: Boolean(req.body.isReserved),
    isHandicapped: Boolean(req.body.isHandicapped),
    isPremium: Boolean(req.body.isPremium)
  });

  newSpot
    .save()
    .then(spots => res.json(spots).catch(err => res.status(400).json(err)));
});

router.get("/spots/:spotNumber", (req, res) => {
  //get the number of a spot
  Spot.findOne({ spotNumber: req.params.spotNumber })
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.get("/open/:isVacant", (req, res) => {
  //check if a spot is vacant
  Spot.find({ isVacant: req.params.isVacant })
    .then(spots => res.json(spots))
    .catch(err => res.status(400).json(err));
});

router.delete("/spots/:id", (req, res) => {
  //delete a spot
  Spot.findById(req.params.id)
    .then(spots => spots.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json(err));
});

module.exports = router;
