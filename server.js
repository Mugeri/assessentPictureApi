const express = require('express');
const app = express();
const routes = require(./server/routes);
const bodyParser = require('body-parser');

routes(app);

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
