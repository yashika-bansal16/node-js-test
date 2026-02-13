const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/college", (req, res) => {
  res.json({
    name: "ABES Engineering College",
    location: "Ghaziabad, Uttar Pradesh",
    established: 2000
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
