var express = require('express');
var mongodb = require('mongodb');

var app = express();

var port = 8080;


var index = require('./controller/index.js');
app.use("/", index);



// Error handling middleware must be after all other middleware and routing.
// Handle error in development mode.
if (app.get('env') === 'development') {
    console.log('running in dev mode');
    app.use(function (err, req, res, next) {
        res.status(500).json(err.stack);
    });
// Handle error in production mode.
} else {
    console.log('running in production mode');
    app.use(function (err, req, res, next) {
        res.status(500).json(err.message);
    });
}


app.listen(port, function () {
    console.log('Listening server on port ' + port);
});