var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 7000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`listening on port ${port}`));