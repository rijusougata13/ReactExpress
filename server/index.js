const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
const blogs = require("./routes/blogs");
const auth = require("./routes/auth");

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/blogs", blogs);
app.use("/auth", auth);

const CONNECTION_URL = process.env.DB_CONNECTION;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`));
  })
  .catch((error) => {
    console.log(error);
  });
