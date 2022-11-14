require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./route");

const app = express();


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/api", routes)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => app.listen(process.env.PORT))
  .catch(err => console.error(err));