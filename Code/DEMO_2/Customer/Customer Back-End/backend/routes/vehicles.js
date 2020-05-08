const router = require("express").Router(); // required router
let Vehicles = require("../models/vehicles.model");

router.route("/").get((req, res) => {
  //get request
  Vehicles.find() //mongoose command
    .then((vehicles) => res.json(vehicles)) // if successful then return in json format
    .catch((err) => res.status(400).json("Error: " + err)); //if unsuccessful then return error
});

router.route("/add").post((req, res) => {
  //post request
  const licensePlate = req.body.licensePlate;
  const make = req.body.make;
  const model = req.body.model;
  const color = req.body.color;

  const newVehicle = new Vehicles({
    licensePlate,
    make,
    model,
    color,
  });

  newVehicle
    .save()
    .then(() => res.json("Vehicle added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/").delete((req, res) => {
  //delete request
  Vehicle.findByIdAndDelete(req.params.id)
    .then(() => res.send("Vehicle Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
