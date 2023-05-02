const express = require("express");
const chefData = require("./data/chef.json");
const app = express();


app.get("/", (req, res) => {
    res.send("Chef website server")
});

app.get("/chef", (req, res) => {
    res.send(chefData)
})
app.listen(5000, () => {
    console.log("Server is running on port 5000...");
});