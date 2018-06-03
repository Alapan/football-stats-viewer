const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/build', express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client/templates/home.html'));
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
