"use strict";

var express = require("express");

var router = express.Router();

router.get("/ping", function(req, res, next) {
	res.json({
		answer: "pong"
	});
});

router.post("/league", function(req, res, next) {
	res.json({
		name: "Awesome League"
	});
});

exports.router = router;