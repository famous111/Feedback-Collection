const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.env.PORT || 5000; // use port 5000 at localhost
app.listen(PORT);
// http://localhost:5000
