const express = require("express");
// const express = require('express');
const router = express.Router();
// const nodemailer = require("nodemailer");
const cors = require("cors");
// const path = require("path");
const sendMail = require("./modules/sendEmail");

const app = express();

// app.use(express.static(path.join(__dirname + "/public")));

const port = process.env.PORT || 8080;
// require("dotenv").config();

// allows to send information from frontend to backend
app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname), "public", "index.html");

//   sendEmail()
//     .then((response) => res.send(response.message))
//     .catch((error) => res.status(500).send(error.message));
res.send({message:'connection successful'})
});

router.post('/send-email', sendMail);

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
})