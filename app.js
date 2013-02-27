
/**
 * Module dependencies.
 */

var express = require('express')
  , db = require('./db')
  , routes = require('./routes')
  , user = require('./routes/user')
  , matches = require('./routes/matches')
  , http = require('http')
  , path = require('path');


var app;
exports.app = app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/matches/create', matches.create);
app.get('/matches/:id', matches.show);
app.get('/matches/:id/line/:x/:y/:side', matches.drawLine);

if (process.argv[1].match(/app.js/)) {
  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });
}
