const express = require("express");

const app = express();
// Home Route
// When the browser sends a request to the server then server creates a response that triggered home page
// Then home page of a website has a response from the our local server
// When we enter localhost:3000 to the google, response that gets data will be "Hello"
app.get("/", function (request, response) {
  response.send("Hello");
});
// Contact Route
app.get("/contact", function (req, res) {
  res.send("Contact Me : gokhanalbayrak@gmail.com");
});
// About Route
app.get("/about", function (req, res) {
  res.send(
    "<h1>Hello My Name is Gökhan</h1><p>I am student who is a computer engineering at ESOGU</p>"
  );
});
// Hobbies Route
app.get("/hobbies", function (req, res) {
  res.send("<ul><li>Anime</li><li>Money Market</li><li>Basketball</li></ul>");
});
app.listen(3000, function () {
  console.log("Server started on port 3000");
});
