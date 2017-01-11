const request = require('superagent');
const Picture = require('../models/picture.js');

const fetch: (req, res) => {
  request
  .get('https://jsonplaceholder.typicode.com/photos/')
  .end((err, res) => {
    if (err) {
      return res.status(200).json(err);
    }
    let i = 0;
    let data = []
    while(i < 100) {
      data.push(res.body[i]);
      i++;
    }
  });
}
