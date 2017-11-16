var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var router = express.Router();

router.get("/", function(req, res, next){
	// Connect to the db
	MongoClient.connect("mongodb://mongodb.test.svc:27017/mongodb", function(err, db) {
		if(!err) {
			console.log("We are connected");
			res.status(200).json(
				{
					"test":"Success",
					"test2":"Hei Morten!"
				}
			);
		}
	});
});

module.exports = router;