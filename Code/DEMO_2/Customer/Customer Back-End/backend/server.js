const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const accountRouter = require("./routes/accountFeatures");
const billingRouter = require("./routes/billing");
const reservationRouter = require("./routes/reservationRoute");
const vehicleRouter = require("./routes/vehicles");
const creditRouter = require("./routes/creditRoute");

app.use("/account", accountRouter);
app.use("/billing", billingRouter);
app.use("/reservation", reservationRouter);
app.use("/vehicles", vehicleRouter);
app.use("/payment", creditRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:6000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
