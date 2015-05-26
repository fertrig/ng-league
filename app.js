"use strict";

var express = require("express"),
	bodyParser = require("body-parser"),
	routes = require("./routes");

var app = express();

app.set("view engine", "jade");
app.use(bodyParser());
app.use(express.static("public"));

if (process.env.NODE_ENV !== "development") {
	app.enable("trust proxy");
}

app.use("/", routes.router);

app.listen(process.env.PORT, function() {
	console.log("Web server listening at port %s", process.env.PORT);
});