const express = require('express');
const app = express();
const routes = require(./server/routes);
const bodyParser = require('body-parser');

mongo.connect('mongodb://olive:pictures@ds161038.mlab.com:61038/pictures')
routes(app);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
