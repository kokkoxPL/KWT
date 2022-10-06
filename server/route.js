const { Router } = require("express");
const router = Router();
const Form = require("./formModel");

const applicants = require("./temporary_applicants.json")

router.post("/form", async (req, res) => {
  const data = req.body;

  const form = new Form(data);
  form.save()
    .catch((err) => console.log(err));
})

router.get("/export", (req, res) => {
  Form.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err))
})

router.get("/applicants", (req, res) => {
  res.json(applicants)
})

module.exports = router