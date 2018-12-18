//Dependencies
const express = require("express");
const router = express.Router();
// const burger = require("../models/burger.js");
const connection = require('../config/connection');

//GET CRUD Method that displays the main page with the burgers
router.get("/", function (req, res) {
    connection.query('SELECT * FROM testTable', function (error, results) {
	  if (error) {
	  	res.json({ message: 'Ooops, something happen' });
	  }
	  console.log('Results: ', results);
	  res.render('index', results);
	});
});

//POST CRUD Method that creates and puts in the burger order

//PUT CRUD Method that updates burger order

//DELETE CRUD Method that deletes specific burger order based on id

module.exports = router;