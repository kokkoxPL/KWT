const { Router } = require("express");
const router = Router();
const Email = require("./formModel");
const validator = require('validator');

const data = require("./temporary_posts.json");

router.get("/test", (req, res) => {
  res.json(data);
})

router.post("/form", async (req, res) => {
  const { name, surname, school, email, phone } = req.body;

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid');
  }

  const exists = await Email.findOne({ email });

  if (exists) {
    throw Error('Email already exists');
  }
})

module.exports = router