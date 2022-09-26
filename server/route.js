const { Router } = require("express");
const router = Router();
const Email = require("./formModel");

const data = require("./temporary_posts.json");
const applicants = require("./temporary_applicants.json")

router.get("/test", (req, res) => {
  res.json(data);
})

router.post("/form", async (req, res) => {
  const { name, surname, school, schoolAddress, email, phone, participants } = req.body;

  console.log(name, surname, email, participants)

  // const exists = await Email.findOne({ email });

  // if (exists) {
  // return res.status(404).json({ error: 'Email already exists' });
  // }

  setTimeout(() => {
    res.json(data);
  }, 1000)
})

router.get("/get_applicants", (req, res) => {
  res.json(applicants)
})

module.exports = router