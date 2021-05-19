const express = require("express");
const app = express();
const router = express.Router();
const User = require("../models/studentSchema");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

// Connect MongoDB at default port 27017.
mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  }
);

//post data to database and check duplicate email

router.post("/add", async (req, res) => {
  let user = new User({
    rollno: req.body.rollno,
    name: req.body.name,
    math: req.body.math,
    physics: req.body.physics,
    chemistry: req.body.chemistry,
    total:
      parseInt(req.body.math) +
      parseInt(req.body.physics) +
      parseInt(req.body.chemistry),
    percentage: (
      ((parseInt(req.body.math) +
        parseInt(req.body.physics) +
        parseInt(req.body.chemistry)) /
        300) *
      100
    ).toFixed(2),
  });
  let { rollno } = req.body;
  const existrollno = await User.findOne({ rollno: rollno });
  if (existrollno) {
    return res.status(422).json({ error: "rollno already exist" });
  }

  user
    .save()
    .then(() => {
      res.status(201).json(user);
    })
    .catch((err) => res.status(400).json({ error: "failed to register" }));
});

// search marks

router.post("/", async (req, res) => {
  let { total } = req.body;

  const user = await User.findOne({ total: total });
  if (!user) {
    return res.status(422).json({ error: "not found" });
  } else {
    return res.status(200).json(user);
  }
});

router.get("/read",(req,res)=>{
  res.send("app working perfectly")
})

module.exports = router;
