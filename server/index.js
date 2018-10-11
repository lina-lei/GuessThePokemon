let express = require('express');
let bodyParser = require('body-parser');

let app = express();
let port = 7000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, () => console.log(`listening on port ${port}`));