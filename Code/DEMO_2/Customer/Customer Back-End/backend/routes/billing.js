const router = require("express").Router();
let Bill = require("../models/billing.model");
const cors = require("cors");

router.use(cors());

router.get("/", function (req, res) {
  Bill.find()
    .then((currentDues) => res.json(currentDues))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const currentDues = req.body.currentDues;
  const dateofDues = req.body.dateofDues;
  const description = req.body.description;

  const newBill = new Bill({
    email,
    currentDues,
    dateofDues,
    description,
  });

  newBill
    .save()
    .then(() => res.json("Bill added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/:id/", function (req, res) {
  Bill.findByIdAndDelete(req.params.id)
    .then(() => res.send("Bill payed!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.delete("/email/:email", function (req, res) {
  Bill.deleteMany({ email: req.params.email })
    .then(() => res.send("All Bills Payed!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", function (req, res) {
  Bill.findById(req.params.id)
    .then((currentDues) => res.json(currentDues))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/email/:email", function (req, res) {
  Bill.find({ email: req.params.email })
    .then((currentDues) => res.json(currentDues))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/update/:id", function (req, res) {
  Bill.findById(req.params.id)
    .then((Bill) => {
      (Bill.currentDues = req.body.currentDues),
        (Bill.description = req.body.description);

      Bill.save()
        .then(() => res.json("Bill updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })

    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
