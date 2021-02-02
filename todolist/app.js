const express = require("express");
//const https = require("https");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
app.set("view engine", "ejs");
app.use(express.static("public"));
// İmportant configuration for Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
// Get request from the browser and send the response(res) to the browser
app.get("/", function (req, res) {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let day = today.toLocaleDateString("en-US", options);
  // Response from the server
  res.render("list", { kindOfDay: day, newListItems: items });
});
// Post request to the server with button
app.post("/", function (req, res) {
  // Parse the request
  let item = req.body.newItem;
  // Push the request to an array
  items.push(item);
  // Go to the GET REQUEST function
  res.redirect("/");
});
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
