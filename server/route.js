const { Router } = require("express");
const router = Router();
const Form = require("./formModel");

// const data = require("./temporary_posts.json");
const applicants = require("./temporary_applicants.json")

router.get("/test", (req, res) => {
  res.json(data);
})

router.post("/form", async (req, res) => {
  const data = req.body;

  const form = new Form(data);
  form.save()
    .catch((err) => console.log(err));
})

router.get("/applicants", (req, res) => {
  res.json(applicants)
})

module.exports = router