const express = require("express");
require("./services/passport");

const app = express();
require("./routes/authRoutes")(app);

// const PORT = process.env.env.PORT
const PORT = 5000; // use port 5000 at localhost
app.listen(PORT);
// http://localhost:5000
