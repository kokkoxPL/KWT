const { Router } = require("express");
const router = Router();
const Form = require("./formModel");

router.post("/form", async (req, res) => {
  const data = req.body;

  const form = new Form(data);
  form.save()
    .then(() => res.json({}))
    .catch((err) => res.status(404).json(err));
})

router.get("/admin", (req, res) => {
  Form.find()
    .then((result) => res.json(result))
    .catch((err) => console.log(err))
})

router.use((req, res) => {
  res.status(418).json({error: "I'm a teapot"});
})

module.exports = router