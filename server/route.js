const { Router } = require("express");
const router = Router();
const Form = require("./formModel");

router.post("/form", (req, res) => {
  const { captcha, ...data } = req.body;
  if (!captcha) {
    return res.status(400).json({ "err": "No captcha" })
  }

  const secret = process.env.RECAPTCHA_SECRET;
  const verifyURL = `https://google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha}`;

  fetch(verifyURL, { method: "POST" })
    .then((res) => {
      if (res.status === 200) {
        console.log("Successful");
      } else {
        console.log("Failed");
        res.status(401).json({ "captcha": "Failed" })
      }
    })
    .catch((err) => res.status(500).json(err))

  const form = new Form(data);
  form.save()
    .then(() => res.json({}))
    .catch((err) => res.status(404).json(err));
})

router.get("/admin", (req, res) => {
  Form.find()
    .select("name surname school schoolAddress email phone participants -_id")
    .then((result) => res.json(result)
    )
    .catch((err) => console.log(err))
})

router.use((req, res) => {
  res.status(418).json({ error: "I'm a teapot" });
})

module.exports = router