var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();

router.get("/dbtest", function(req, res, next){
	// Connect to the db
	MongoClient.connect("mongodb://mongodb.test.svc:27017/exampleDb", function(err, db) {
		if(!err) {
			console.log("We are connected");
		}
	});
});

module.exports = router;