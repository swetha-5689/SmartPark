const router = require("express").Router(); // required router
let Reservation = require("../models/reservations.model");

router.route("/").get((req, res) => {
  //get request
  Reservation.find() //mongoose command
    .then((reservations) => res.json(reservations)) // if successful then return in json format
    .catch((err) => res.status(400).json("Error: " + err)); //if unsuccessful then return error
});

router.route("/add").post((req, res) => {
  //post request
  const email = req.body.email; // variables in reservation / required to make a reservation
  const date = Date.parse(req.body.date);
  const startTime = Date.parse(req.body.startTime); // converting to Number data type
  const endTime = Date.parse(req.body.endTime); // parsing to Date data type

  const newReservation = new Reservation({
    email,
    date,
    startTime,
    endTime,
  });

  newReservation
    .save()
    .then(() => res.json("Reservation added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id/").delete((req, res) => {
  //delete request
  Reservation.findByIdAndDelete(req.params.id)
    .then(() => res.send("Reservation Deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/email/:email", function (req, res) {
  Reservation.find({ email: req.params.email })
    .then((date) => res.json(date))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Reservation.findById(req.params.id)
    .then((Reservation) => {
      (Reservation.currentDues = req.body.currentDues),
        (Reservation.description = req.body.description);

      Reservation.save()
        .then(() => res.json("Reservation updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;

//SHE WORKS LETS GOOOO FULL SEND
