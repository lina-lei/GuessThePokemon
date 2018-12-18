const express = require('express');
const bodyParser = require('body-parser');
const { getOne } = require('./db/routes.js');

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));

app.get('/getOne', (req, res) => {
  getOne((err, result) => {
    if (err) {
      console.log('err retrieving random pokemon', err);
    } else {
      console.log('successfully retrieved random pokemon', result);
      res.send(result);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
