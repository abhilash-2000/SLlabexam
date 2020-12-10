const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

handler = require("./routes");

mongoose
  .connect(
    "mongodb+srv://abhilash123:kyqmi9-serdyN-mydmyr@cluster0.rnsas.gcp.mongodb.net/tododb?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }
  )
  .then(() => console.log("[INFO] Connected to database."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());

app.use("/api/feedback", handler);
const PORT = 3000;

app.listen(3000,()=> console.log("listning on port 3000..."));
