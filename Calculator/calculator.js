const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const app = express();
//Use urlencoded when html code will parsed and extended:true means to allow us using nested objects
app.use(bodyParser.urlencoded({ extended: true }));
// __dirname holds the current location

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
// When the client enter the page then the server trigger
// Get requests that go to the bmiCalculator route
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator.html", function (req, res) {
  var w = Number(req.body.weight);
  var h = Number(req.body.height);
  var result = w / (h * h);
  res.send("Result is : " + result);
});
app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of calculation is : " + result);
});
app.listen(3000, function () {
  console.log("Server connected to port 3000");
});
