const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
// İmportant configuration for Body-Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  const query = req.body.cityName;
  const id = query;
  // This key is fake it is used to represent key
  // You have to get key from https://api.openweathermap.org
  const apiKey = "123abc";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    id +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https.get(url, function (response) {
    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const name = weatherData.name.split(" ");
      const name_ = name[0];
      const icon = weatherData.weather[0].icon;
      const URL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write(
        "<h1>The tempature in " + name_ + " is " + temp + " degress</h1>"
      );
      res.write("The weather is " + weatherData.weather[0].description);
      res.write("<img src=" + URL + ">");
      res.send();
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
