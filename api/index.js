const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes");

const PORT = 4000;
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(bodyParser.json());

app.use("/api", api);

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`Server started on port - ${PORT}`);
});
