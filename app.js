const express = require("express");
const router = express.Router();
const cors = require("cors");
const sendMail = require("./modules/sendEmail");

const app = express();

// app.use(express.static(path.join(__dirname + "/public")));

const port = process.env.PORT || 8080;
require("dotenv").config();

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
  res.send({ message: 'connection successful' })
});

app.post('/send-email', sendMail);

app.get('/getPdf', async (req, res) => {
  const downloadUrl = req.query.downloadUrl;
  console.log(downloadUrl);
  console.log('request for pdf made');
  try {
    const pdfResponse = await fetch(downloadUrl);

    const pdfArrayBuffer = await pdfResponse.arrayBuffer();

    // Convert ArrayBuffer to Buffer
    const pdfBuffer = Buffer.from(pdfArrayBuffer);

    res.contentType('application/pdf');
    res.send(pdfBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})