// dependencies
var express = require('express');
var bodyParser = require('body-parser');

// sets up express
var app = express();
var PORT = process.env.PORT || 3000;

// sets up the express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// starts the server to begin listening
app.listen(PORT, function() {
  console.log('App listening on PORT ' + PORT);
});

// html routes
require('./app/routing/htmlRoutes.js')(app);
// api routes
require('./app/routing/apiRoutes.js')(app);