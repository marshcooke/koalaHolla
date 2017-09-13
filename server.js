var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 5000;
var indexRouter = require('./routes/index');
var koalaRouter = require('./routes/koala');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/koala', koalaRouter);

// Start listening for requests on a specific port
app.listen(port, function(){
  console.log('listening on port', port);
});

