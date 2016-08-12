// SERVER //

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// set port
app.set('port', (process.env.PORT || 4000));

// General/wildcard Get
app.get('/*', function(req, res, next) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});

// 404 errors
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(app.get('port'), function() {
  console.log('Listening on port: ', app.get('port'));
});


module.exports = app;
