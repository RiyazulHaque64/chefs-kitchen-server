const express = require("express");
const chefData = require("./data/chef.json");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Chef website server");
});

app.get("/chef", (req, res) => {
  res.send(chefData);
});

app.get("/chef/:id", (req, res) => {
  const id = req.params.id;
  const chefDetails = chefData.find((chef) => chef.id == id);
  res.send(chefDetails);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
