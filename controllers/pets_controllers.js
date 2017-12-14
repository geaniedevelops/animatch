const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const db = require("../models");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/create-account", (req, res) => {
  res.render("newuser");
})

app.get("/quiz", (req, res) => {
  res.render("quiz", {
    css: "quiz.css"
  });
});

app.get("/account", (req, res) => {
  res.render("account");
  // if (auth) {
  //   res.render("account");
  // } else {
  //   res.render("login");
  // }
});

app.get("/shelters", (req, res) => {
  res.render("shelter");
});

app.get("/home", (req, res) => {
  res.render("index");
});

app.listen(port);

// var express = require('express');
// var router = express.Router();
// var queries = require('../models/pets.js');
//
// router.get('/', function (req, res) {
//     queries.show(function(data){
//         //console.log(data);
//         var Data = {
//             petsData: data
//         }
//         //res.render('index', {data : Data});
//         res.render('index', Data);
//     });
// });
//
// router.post('/create', function (req, res) {
//     queries.add(req.body.item, function(data) {
//         res.redirect('/');
//     });
// });
//
// router.post('/update', function(req, res){
//   queries.add(req.body.id, function(result){
//     res.redirect('/');
//   });
// });

module.exports = router;