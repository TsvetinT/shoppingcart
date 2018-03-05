var http = require('http');
var express = require('express');
var app = express();
var path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/shoppingcart.html'));
});
app.listen(3000, function() { console.log('listening')});