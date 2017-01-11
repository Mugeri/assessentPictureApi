const express = require('express');
const app = express();
const routes = require('./server/routes/routes.js');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongo.connect('mongodb://olive:pictures@ds161038.mlab.com:61038/pictures')
routes(app);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen('3001', function() {
  console.log('listening on port 3001');
});
module.exports = app;
