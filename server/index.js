let express = require('express');
let bodyParser = require('body-parser');
let { getOne } = require('./db/routes.js');

let app = express();
let port = 7000;

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.get('/getOne', (req, res) => {
  getOne(function(err, result) {
    if (err) {
      console.log('err retrieving random pokemon', err);
    } else {
      console.log(result);
    }
  });
});




app.listen(port, () => console.log(`listening on port ${port}`));