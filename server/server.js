require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./route');

const app = express();

app.use(express.json());

app.use("/api", routes)

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => app.listen(process.env.PORT))
  .catch(err => console.error(err));