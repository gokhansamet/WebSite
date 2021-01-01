require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const md5 = require("md5"); // to hash the passwords
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// To connect the MONGODB and to create a database
mongoose.connect("mongodb://localhost:27017/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Create a schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});
// Create a collection (MongoDB converts the document name as "users")
const User = mongoose.model("User", userSchema);
app.get("/", function (req, res) {
  res.render("home");
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.get("/register", function (req, res) {
  res.render("register");
});
app.post("/register", function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: md5(req.body.password),
  });
  newUser.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.render("secrets");
    }
  });
});
app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = md5(req.body.password);
  User.findOne({ email: username }, function (err, foundUser) {
    if (foundUser.password === password) {
      res.render("secrets");
    } else {
      console.log(err);
    }
  });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
